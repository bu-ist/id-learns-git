# ID Learns Git

Welcome to the Git training sandbox!

Fire up [Tower](http://www.git-tower.com/), [connect your Github account](http://www.git-tower.com/help/mac/manage-hosting-services/connect-accounts), and get ready to __learn__.

The following excercises will be done during the training session.

## Exercise #1 - Introduce yourself

1. **Clone** this repository to your computer using Tower
2. **Add** a folder named after your BU login
3. **Add** a `README.md` file to your directory
4. **Stage** your changes for commit
5. **Commit** with a thoughtful message

## Excercise #2 - Sharing is Caring

1. **Push** your commit to the remote **origin** (Github)
2. Wait for someone else to do the same, and **fetch** their changes in to your local repository
3. Take a look at their changes, and then **pull** them into your **master** branch

## Excercise #3 - Embrace the stash

1. Make a change to your `README.md`, but don't commit it
2. Meanwhile, someone else should update their `README.md` with a super important change, commit and push to origin
3. **Stash** your local changes so that you can get theirs...
4. Pull down their urgent change
5. ...and **apply** your stash to restore your work

## Excerise #4 - Conflicting Stories

1. Make another update to your `README.md` and commit it
2. Meanwhile, someone else should make an update to your `README.md`, commit and push it
3. Attempt to push your commits, and watch Git complain that "Updates were rejected because the remote contains work that you do not have locally"
4. Attempt to pull their changes into your `master` branch, and watch Git notify you of a **conflict**
5. Fix the conflict
6. Push your change

## Bonus Excercise - Github, Forks and Pull Requests

1. **Fork** this repository using the Github UI, creating a separate remote using your Github account
2. Add a new remote to your local repository using Tower
2. Commit and push a change to your fork
3. Submit a **pull request** back to the original repository
