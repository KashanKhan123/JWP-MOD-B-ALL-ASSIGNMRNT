import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Adjust breakpoint as needed

  return (
    <ImageList
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        transform: "translateZ(0)",
      }}
      cols={isSmallScreen ? 1 : 3} // Switch to 1 column on small screens
      gap={8}
    >
      {itemData.map((item) => {
        const cols = isSmallScreen ? 1 : item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                height: "100%",
              }}
              position="bottom"
              title={
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                    {item.description}
                  </div>
                </div>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
     {img: 'https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },{
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {img: 'https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },{
      img: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cars',
      description: 'Lorem ipsum dolor sit amet.',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //   title: 'Bike',
    //   description: 'Explore the world with our durable and stylish bikes.',
    // },
  // Add more items as needed
];
