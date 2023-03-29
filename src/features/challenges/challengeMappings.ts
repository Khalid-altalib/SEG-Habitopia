type challengeMappingsType = {
  [key: string]: { color: string; image: string };
};

export const challengeMappings: challengeMappingsType = {
  Sleep: { color: "blue.400", image: "https://www.westelm.co.uk/site/WE/Product%20Images/mid-century-bedframe-acorn-h001-202215-0205-mid-century-bed-2-z.jpg?resizeid=61&resizeh=450&resizew=450" },
  Diet: { color: "green.400", image: "https://www.heart.org/-/media/Images/News/2019/April-2019/0429SustainableFoodSystem_SC.jpg" },
  Fitness: { color: "amber.400", image: "https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg" },
  Study: {color: "yellow.400", image: "https://static.vecteezy.com/system/resources/previews/002/271/771/original/realistic-stationary-with-paper-strip-background-free-vector.jpg"},
  Read: {color: "orange.400", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80"},
  fallback: { color: "purple.400", image: "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg" },
};
