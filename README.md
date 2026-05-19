git clone --no-checkout https://github.com/MohitkIstwal/a.git
cd a
git sparse-checkout init --cone
git sparse-checkout set Assignment_7_CRUD/crud-api
git checkout main




git init
git add .

git remote add origin http://

git commit -m "first commit"

git push -u origin main

git status


Open Credential Manager → Windows Credentials
Find git:https://github.com and remove it
Try pushing again — it'll prompt you to log in fresh
