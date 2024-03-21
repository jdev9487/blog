for path in ./animations/*
do
    fullfilename=$(basename -- "$path")
    cp $path ./public/$fullfilename
done