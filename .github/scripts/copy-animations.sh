for path in ./animations/*
do
    fullfilename=$(basename -- "$path")
    cp $path ./public/animations/$fullfilename
done