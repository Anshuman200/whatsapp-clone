import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { Chat, DonutLarge, MoveVertIcon } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import "./sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <h1>{user?.displayName}</h1>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new Chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
          {rooms?.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}
        
      </div>
    </div>
  );
}

export default Sidebar;
