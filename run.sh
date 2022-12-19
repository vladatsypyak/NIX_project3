#! /bin/bash
cd converter/converter
npm start &
cd ../../Photogramm/photogramm
npm start &
cd ../../quiz
npm start &
cd ../
google-chrome index.html
