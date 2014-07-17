---
title: "Reasons to adopt code review in your team"
date: "2014-06-10"
---

I've worked with enough teams to know that code review should be an essential part of any software team's worflow.

It's far too easy for **mistakes, inconsistent conventions and low quality code to be introduced to ignore the benefits of code review**.

Here are a few quick **reasons why your team should be using code review** if you aren't already:

- **Better transparency into the work being created.** When everyone sees the code added to a project, you increase the familiarity of all developers with the code base. The more familiarity each developer has, the faster they can make changes and reason about existing functionality.
- **Gives team members a chance to agree on implementation before it's too late.** It's much easier to discuss implementation when the code is on a feature branch then after the fact when it's in production. Use the code as a starting point for conversations about better paths of implementation.
- **Enforces standards and conventions.** When everyone is on the same page about standards and conventions, your code base starts to appear to be written by a single person. This is a Good Thing &trade;.
- **Gives new developers a chance to ensure they're taking edge cases into account.** Allow new developers the benefit of the eyes of more senior engineers before committing code. 
- **Allow developers to learn from each other.** When developers see each others code, they tend to learn better ways to implement things. In my experience, even the most senior engineers have things to learn from their peers. The more learning you can facilitate, the better off your team is.
- **Fixing bugs before they exist.** Many times in code review a potential bug is spotted before even making into the main line of development. Having other eyes on the code tends to suss out many bugs that the developer by themselves could not see.

As with everything, there are **a few drawbacks to doing code review** in a team, specifically:

- **The slight slow down of having to wait for a peer to review code.** This can be mitigated *if the team agrees to do code review as their first step when working for the day*. 
- **The time it takes to do review.** In general, the drawback of development speed being slowed down is far outweighed by the improved quality of code and team collaboration as outlined above.
- **Team adoption.** Getting developers to adopt code review can sometimes be tricky. I've found the best way is for the benefits to be clear to everyone on the team. It is also helpful to not allow any code to be merged into the main branch unless it's been reviewed by at least one developer.

To my mind, these are acceptable drawbacks if creating quality software is your goal and I have yet to suffer because of implementing in a team.

If you are interested in implementing code review in your team, consider using tools like [Github](https://github.com), [Stash](https://www.atlassian.com/software/stash) or [GitLab](https://about.gitlab.com/) to implement code review in your team. My personal favorite approach is to use Github Pull Requests to do collaborate review, but **don't let the tools get in you way towards adopting code review**.
