for path in ./markdown/*
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    mkdir -p ./content/blog/$filename
    cp $path ./content/blog/$filename/index.md
done