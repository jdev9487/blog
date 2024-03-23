grep -Eroh "user:\s*[',\"].*[',\"]" ./src/posts | while read -r line
do
    user=$(echo "$line" | cut -d"'" -f 2 | cut -d"\"" -f 2)
    curl --location --output ./public/avatars/$user.png "https://avatars.githubusercontent.com/${user}"
done