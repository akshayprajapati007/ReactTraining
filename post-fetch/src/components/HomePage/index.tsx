import React, {useState, useEffect, useRef, useCallback } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CircularProgress from '@mui/material/CircularProgress'
import {makeStyles} from '@mui/styles'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#696969",
    },
  },
})

interface IPostData {
	title: string
	url: string
	createdAt: string
	author: string
}

interface Column {
  id: 'title' | 'url' | 'createdAt' | 'author'
  label: string
  minWidth?: number
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'title', label: 'Title', minWidth: 70 },
  { id: 'url', label: 'URL', minWidth: 120 },
  { id: 'createdAt', label: 'Created At', minWidth: 50 },
  { id: 'author', label: 'Author', minWidth: 90 }
]

const HomePage = () => {
	const pageNumber = useRef(0)
	const history = useHistory()
	const classes = useStyles()
	const [loader, setLoader] = useState(true)
	const [lastPost, isLastPostVisible] = useInView()
	const [postData, setPostData] = useState<IPostData[]>([])

	const getPosts = async () => {
		await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber.current}`)
      	.then(res => res.json())
			.then(data => {
				const tempData: IPostData[] = []
				if(data?.hits?.length > 0) {
					data?.hits.map(record => {
						const tempObj: IPostData = {
							title: record?.title,
							url: record?.url,
							createdAt: record?.created_at,
							author: record?.author
						}
						tempData.push(tempObj)
					})
					setPostData(preData => [...preData, ...tempData])
					pageNumber.current += 1
					setLoader(false)
				} else {
					alert('Some error occured!')
					setLoader(false)
				}
			})
			.catch(err => console.log(err))
	}

	const postEndingRef = useCallback((node) => {
	      lastPost(node)
	}, [lastPost])

	useEffect(() => {
		let unmount = true
		if (unmount && isLastPostVisible && postData?.length > 0) {
			setLoader(true)
			getPosts()
		}

		return () => {
			unmount = false
		}
	}, [isLastPostVisible])

	useEffect(() => {
		getPosts()
		const interval = setInterval(() => {
			getPosts()
		}, 10000)

		return () => {
			clearInterval(interval)
			setLoader(false)
		}
	}, [])

	const handleRowClick = (record: IPostData) => {
		history.push({ pathname: '/post-details', state: record })
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
		{loader && <CircularProgress style={{ position: 'fixed', top: '30%', left: '50%' }} />}
	      <TableContainer sx={{ maxHeight: '100vh' }} >
	        <Table stickyHeader aria-label="sticky table">
	          <TableHead>
	            <TableRow className={classes.root}>
	              {columns.map((column) => (
	                <TableCell
	                  key={column.id}
	                  style={{ minWidth: column.minWidth }}
	                >
	                  {column.label}
	                </TableCell>
	              ))}
	            </TableRow>
	          </TableHead>
	          <TableBody>
	            {postData
	              .map((row, index) => {
	                return (
	                  <TableRow 
	                  	hover
	                  	role="checkbox"
	                  	tabIndex={-1}
	                  	key={row.title+index.toString()}
	                  	onClick={() => handleRowClick(row)}>
	                    {columns.map((column) => {
	                      const value = row[column.id];
	                      return (
	                        <TableCell key={column.id}>
	                          {column?.format && typeof value === 'number'
	                            ? column?.format(value)
	                            : value}
	                        </TableCell>
	                      );
	                    })}
	                  </TableRow>
	                );
	              })}
	          </TableBody>
	        </Table>
	        <div ref={postEndingRef} style={{ opacity: '0', height: '0' }}>
	        	last post
	        </div>
	      </TableContainer>
	    </Paper>
	)
}

export default HomePage