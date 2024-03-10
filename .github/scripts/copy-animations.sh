for path in ./content/blog/**/*.md
do
    parent_dir="$(dirname -- "$(realpath -- path)")"
    grep -E -o "\w+\.gif" $path | while read -r file
    do
        echo "cp ./animations/$file ./content/blog/$parent_dir/$file"
        cp ./animations/$file ./content/blog/$parent_dir/$file
    done
done