const express = require('express');
const app = express();
const port = 8000;

app.get('/cooperation', (req, res) => {
  const data = {
    1: {
      profileImage: 'Mona.png',
      name: 'testName',
      title: 'mockUpTitle',
      content: '비경 팟 구함',
      getMember: false
    },
    2: {
      profileImage: 'Mona.png',
      name: 'testName2',
      title: 'clamp test',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      getMember: true
    }
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
