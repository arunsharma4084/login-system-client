import { MdLogout, MdSettings, MdPerson, MdPersonAddAlt1 } from "react-icons/md"

export const menuItems = [ 
  [
    {
      id: 1,
      title: "Your Profile",
      path: "/user/me",
      icon: MdPerson
    },
    {
      id: 2,
      title: "Update Profile",
      path: "/user/update-profile",
      icon: MdPersonAddAlt1
    },
    {
      id: 3,
      title: "Settings",
      path: "/user/settings",
      icon: MdSettings
    },

  ],
  [
    {
      id: 4,
      title: "Logout",
      path: "/landingPage",
      icon: MdLogout
    },
  ]
];
