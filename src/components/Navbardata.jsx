import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from "@mui/icons-material/Article";
import UpdateIcon from "@mui/icons-material/Update";
import SettingsIcon from "@mui/icons-material/Settings";


const Navbardata =[{
  id: 1,
  title: "Home",
  icon: <HomeIcon />,
  link: "/"
},
{
  id: 2,
  title: "New Article",
  icon: <ArticleIcon />,
  link: "/Newarticle"
},
{
  id: 3,
  title: "Update Article",
  icon: <UpdateIcon />,
  link: "/Update"
},
{
  id: 4,
  title: "Settings",
  icon: <SettingsIcon />,
  link: "/Settings"
}
]

export default Navbardata
