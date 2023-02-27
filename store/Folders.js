const Folders = [
  {
    id: "1",
    name: "root",
    folders: [
      {
        id: "1.1",
        name: "thanks",
        folders: null,
      },
      {
        id: "1.2",
        name: "awesome",
        folders: [
          {
            id: "1.2.1",
            name: "again",
            folders: null,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "hi",
    folders: [
      {
        id: "2.1",
        name: "hello",
        folders: null,
      },
      {
        id: "2.2",
        name: "nice",
        folders: [
          {
            id: "2.2.1",
            name: "world",
            folders: null,
          },
        ],
      },
    ],
  },
];

export default Folders;
