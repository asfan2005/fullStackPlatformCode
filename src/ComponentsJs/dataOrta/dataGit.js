const dataGit = [
    {
        id: 1,
        title: "Git Asoslari",
        description: "Git versiya boshqaruv tizimining asosiy buyruqlari va tushunchalari",
        examples: [
            {
                name: "Git Inizializatsiya va Asosiy Buyruqlar",
                code: `# Yangi git repository yaratish
git init

# Fayllarni staging area ga qo'shish
git add <fayl-nomi>
git add .  # Barcha fayllarni qo'shish

# O'zgarishlarni commit qilish
git commit -m "Commit xabari"

# Remote repository bilan ishlash
git remote add origin <repository-url>
git push -u origin master

# Status va tarix ko'rish
git status
git log`,
                explanation: "Git ning eng ko'p ishlatiladigan asosiy buyruqlari",
                result: "Loyihani git bilan boshqarish va versiyalarni saqlash"
            },
            {
                name: "Branchlar bilan Ishlash",
                code: `# Yangi branch yaratish
git branch <branch-nomi>

# Branch ga o'tish
git checkout <branch-nomi>
# yoki
git switch <branch-nomi>

# Yangi branch yaratish va unga o'tish
git checkout -b <branch-nomi>

# Branchlarni birlashtirish
git merge <branch-nomi>

# Branchlar ro'yxatini ko'rish
git branch`,
                explanation: "Git branchlar bilan ishlash va ularni boshqarish",
                result: "Parallel development va feature branchlar bilan ishlash"
            }
        ]
    },
    {
        id: 2,
        title: "Git Advanced Features",
        description: "Git ning ilg'or xususiyatlari va murakkab operatsiyalar",
        examples: [
            {
                name: "Rebase va Reset",
                code: `# Rebase qilish
git rebase master

# Interactive rebase
git rebase -i HEAD~3

# Soft reset
git reset --soft HEAD~1

# Hard reset
git reset --hard HEAD~1

# Faylni oxirgi commit holatiga qaytarish
git checkout -- <fayl-nomi>`,
                explanation: "Git tarixi bilan ishlash va o'zgarishlarni qayta tuzish",
                result: "Toza va tartibli commit tarixi"
            },
            {
                name: "Stash va Cherry-pick",
                code: `# O'zgarishlarni vaqtincha saqlash
git stash save "Vaqtincha o'zgarishlar"
git stash list
git stash pop

# Boshqa branchdan commit ni ko'chirish
git cherry-pick <commit-hash>

# Konfliktlarni hal qilish
git mergetool
git rebase --continue`,
                explanation: "Vaqtincha o'zgarishlar va tanlab olish operatsiyalari",
                result: "Moslashuvchan versiya boshqaruvi"
            }
        ]
    },
    {
        id: 3,
        title: "Git Best Practices",
        description: "Git bilan ishlashning eng yaxshi amaliyotlari va professional texnikalar",
        examples: [
            {
                name: "Git Flow va Commit Konventsiyalari",
                code: `# Git Flow branch strukturasi
master
├── develop
│   ├── feature/new-feature
│   ├── bugfix/bug-fix
│   └── release/1.0.0
└── hotfix/critical-fix

# Conventional Commits
feat: yangi funksionallik qo'shish
fix: xatoni tuzatish
docs: hujjatlarni yangilash
style: kod formatini o'zgartirish
refactor: kodni qayta yozish
test: testlarni qo'shish
chore: build jarayoni o'zgarishlari`,
                explanation: "Professional Git workflow va commit standartlari",
                result: "Tartibli va professional loyiha boshqaruvi"
            },
            {
                name: "Git Hooks va Advanced Config",
                code: `# Pre-commit hook namunasi
#!/bin/sh
npm run lint
npm run test

# Git global konfiguratsiya
git config --global user.name "Ism Familiya"
git config --global user.email "email@example.com"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main

# Git alias yaratish
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status`,
                explanation: "Git avtomatizatsiyasi va shaxsiy sozlamalar",
                result: "Samarali va avtomatlashtirilgan git workflow"
            }
        ]
    }
];

export default dataGit;