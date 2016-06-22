jekyll build
rsync --verbose --recursive --delete _site/ mfenniak@10.156.95.7:~/iohint/html/
