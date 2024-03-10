for path in ./content/blog/**/*.md
do
    fullfilename=$(basename -- "$path")
    filename="${fullfilename%.*}"
    echo "-------------"
    echo $path
    grep -o *.gif $path | while read -r file
    do
        echo "${file} - ${filename}/${file}"
        cp ./animations/$file ./content/blog/$filename/$file
    done
done