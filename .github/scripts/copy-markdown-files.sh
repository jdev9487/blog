for path in ./artifacts/**
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    mkdir -p ./content/blog/$filename
    cp $path/index.md ./content/blog/$filename/index.md
done