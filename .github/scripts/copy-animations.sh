for path in ./content/blog/**/*.md
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    for file in grep -o *.gif index.md
    do
        cp ./animations/$file ./content/blog/$filename/$file
    done
done