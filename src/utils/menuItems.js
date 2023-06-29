import { MdLogout, MdSettings, MdPerson, MdPersonAddAlt1 } from "react-icons/md"

export const menuItems = [ 
  [
    {
      id: 1,
      title: "Your Profile",
      path: "/users/me/profile",
      icon: MdPerson
    },
    {
      id: 2,
      title: "Update Profile",
      path: "/users/me/update-profile",
      icon: MdPersonAddAlt1
    },
    {
      id: 3,
      title: "Settings",
      path: "/users/me/settings",
      icon: MdSettings
    },

  ],
  [
    {
      id: 3,
      title: "Logout",
      path: "/landingPage",
      icon: MdLogout
    },
  ]
];
