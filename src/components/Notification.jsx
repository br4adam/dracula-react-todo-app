import { Toaster } from "react-hot-toast"

const Notification = () => {
  return (
    <Toaster 
    position="top-center"
    gutter={10}
    containerStyle={{
      marginTop: "1rem",
      userSelect: "none"
    }}
    toastOptions={{
      className: 'notification',
      duration: 2000,
      
      style: {
        background: "#21222c",
        border: "1px solid #414558",
        padding: "0.25rem 0.5rem 0.25rem 0.75rem",
        fontSize: "1rem",
        fontFamily: "Fira Code, monospace"
      },

      success: {
        style: {
          color: "#9580ff"
        },
        iconTheme: {
          primary: "#9580ff",
          secondary: "#21222c",
        }
      },

      error: {
        style: {
          color: "#ff80bf"
        },
        iconTheme: {
          primary: "#ff80bf",
          secondary: "#21222c",
        }
      }
    }}/>
  )
}

export default Notification