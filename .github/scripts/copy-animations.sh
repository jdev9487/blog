for path in ./content/blog/**/*.md
do
    echo $path
    parent_dir="$(dirname -- "$(realpath -- $path)")"
    echo $parent_dir
    grep -E -o "\w+\.gif" $path | while read -r file
    do
        echo "cp ./animations/$file $parent_dir/$file"
        cp ./animations/$file $parent_dir/$file
    done
done