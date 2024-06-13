os=(darwin linux)
arch=(amd64 arm64)

version=v0.1.5

for o in ${os[@]}; do
  for a in ${arch[@]}; do
    echo "Extracting $o-$a"
    rm ./packages/$o-$a/bin/zenv
    wget "https://github.com/m-mizutani/zenv/releases/download/$version/zenv-$version-$o-$a.tar.gz" -q -O - | tar -x -C ./packages/$o-$a/bin
  done
done
