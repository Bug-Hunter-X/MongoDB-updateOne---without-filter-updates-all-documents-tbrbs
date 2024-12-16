# MongoDB updateOne() Without Filter: Data Corruption Bug

This repository demonstrates a common error in MongoDB update operations: using `updateOne()` without a filter. This results in unintentionally updating *all* documents in the collection, potentially leading to data corruption or unexpected behavior.

## The Bug
The provided `bug.js` file shows a flawed `updateOne()` call.  Because there's no filter (`{}`), the update operation applies to every document.  This behavior is often unexpected, and can cause significant problems in production.

## The Solution
The `bugSolution.js` file corrects the bug by adding a proper filter to the `updateOne()` call. The filter ensures that only the intended document(s) are updated, preventing accidental data modification.

## How to Reproduce
1. Ensure you have MongoDB installed and running.
2. Create a database named `mydatabase` and a collection named `mycollection`.
3. Insert some test documents into `mycollection`.
4. Run `bug.js` to see the unintended updates.
5. Run `bugSolution.js` to see the corrected update process.
