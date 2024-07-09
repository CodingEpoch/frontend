'use client'
import { useState } from "react";
import styles from './Main.module.css'
import reuse from '../../../app/reusable.module.css'
export default function LibraryButton({ exists, id }) {
  const [inLibrary, setInLibrary] = useState<boolean>(exists);
  const handleLibrary = async () => {
    console.log(id, exists)
    try {
      const response = await fetch(`/api/library/update?id=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "applicatiion/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        setInLibrary((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className={reuse.buttonReverse} onClick={handleLibrary}>{inLibrary ? "Remove from Library" : "Add to Library"}</button>
  );
}
