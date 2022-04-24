# udacity Advanced Full-Stack Web Development Nanodegree Program

# PROJECT 1 Image Processing API

This project will create image versions in different dimensions where width and hight to be entered by the Front-End,
using the page url to resize and save images as the specifications entered by user.

clone, install dependencies, Build, Test and run server by running the below commands

```bash
git clone https://gitlab.com/mahmoud77selim/image-processing-api.git
```

```bash
cd image-processing-api
```

```bash
npm audit fix
```

```bash
npm install
```

```bash
npm run prettier
```

```bash
npm run lint
```

```bash
npm run test
```

```bash
npm run build
```

```bash
npm run start
```

Endpoints:

1-HomePage request

```
GET http://localhost:8080
```

2-Resize HTTP request
```
GET http://localhost:8080/resize?w=400&h=400
```
    where
        {w} is the desired width
        {h} is the desired height

original size images can be listed localy by
```
    ls src/public/images
```

generated thumbnails images version can be listed locally by
```
    ls src/public/thumbs
```

# Project By: Mahmoud Hassanein.