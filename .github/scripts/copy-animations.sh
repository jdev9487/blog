for path in ./content/blog/**/*.md
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    grep -o *.gif $path | while read -r file
    do
        cp ./animations/$file ./content/blog/$filename/$file
    done
done