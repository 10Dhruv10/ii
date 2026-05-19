git clone --no-checkout https://github.com/MohitkIstwal/a.git
cd a
git sparse-checkout init --cone
git sparse-checkout set Assignment_7_CRUD/crud-api
git checkout main