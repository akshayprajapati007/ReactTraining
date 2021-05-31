import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AppIcon from '@material-ui/icons/Apps';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    navContainer: {
        '& > *': {
          display:'flex',
          justifyContent:'left',
          marginTop:'0.8em'
        },
      },
      navItemContainer:{
        '& > *' :{
            display:'flex',
            alignItems:'center',
            color:'black',
            float:'left',
            marginLeft:'0.7em',
        }
      },
      navLink:{
        fontSize:'0.6rem',
        textDecoration:'none',
        fontWeight:'600',
        letterSpacing:'0.1em',
        marginLeft:'1.5em',
      }
  });


function Nav() {
    const classes = useStyles();

    return (
        
        <React.Fragment>
            {/* Navigation Bar */}
            <div>
                <div className={classes.navContainer}>
                    <div className={classes.navItemContainer}>
                        <HomeIcon style={{color:'#f50057', fontSize:'22'}}/>
                        <Link className={classes.navLink} to='/dashboard'>
                            DASHBOARD
                        </Link>
                    </div>
                    <div className={classes.navItemContainer}>
                        <AppIcon style={{color:'#f50057', fontSize:'22'}}/>
                        <Link className={classes.navLink} to='/categories'>
                            CATEGORIES
                        </Link>
                    </div>
                    <div className={classes.navItemContainer}>
                        <LocalMallIcon style={{color:'#f50057', fontSize:'22'}}/>
                        <Link className={classes.navLink} to='/products'>
                            PRODUCTS
                        </Link>
                    </div>
                    <div className={classes.navItemContainer}>
                        <VisibilityIcon style={{color:'#f50057', fontSize:'22'}}/>
                        <Link className={classes.navLink} to='/overview'>
                            OVERVIEW
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav
