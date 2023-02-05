git init 
git add .
git commit -m "push"
git remote add origin git@github.com:aps-xiao/apingstudio.git
git branch -M main
git push -u origin main
yarn run docs:build

cd .\src\.vuepress\dist\
echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M gh-pages
git push -f git@github.com:aps-xiao/apingstudio.git main:gh-pages

cd ..\..\..\
