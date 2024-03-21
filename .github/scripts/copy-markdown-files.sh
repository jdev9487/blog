for path in ./markdown/*
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    cp $path ./src/posts/$filename.md
done