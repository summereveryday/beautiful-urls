# beautiful-urls

First, I'd want to clarify with the CEO what specifically is the issue with the long url.

    Hey! I do know what you're talking about and I totally get the long urls being a bit of a nuisance, but I wanted to find out exactly what problem you're trying to solve with making the urls shorter. Is your main issue copying the urls? Sometimes, it can be easy to accidentally only grab part of a long url. Or is your main concern how ugly they look when sharing them? 
    
    I can think of a couple solutions to shorten the urls, but they're kind of time intensive. Another (way easier) solution would be to implement a "copy url" button next to the table filters that automatically copies the long url when you click the button. And using hyperlinks can prevent them from being ugly when you share them. (did you know that if you copy a link, highlight a word or phrase in slack, and hit command+v to paste that it automatically creates a hyperlink? 🤯)

    Given [insert other high priority money making project] is pretty high priority, I'd recommend doing the above. But let me know if that solution doesn't meet your needs. We can of course look into implementing one of the more compliated ones.


Since the button solution only takes about 5 minutes. I'd go ahead and implement it locally, just to be able to show her an example of it. If she said "yeah! That totally solves our problem." then I'd deploy and be done! For this example, we'll say it's on the userIndex.tsx page.

However, if after that, we came to the conclusion that they really, really needed short urls, I'd start looking for an existing node.js url shortener package. If it's a complicated process and something already exists and is well maintained, I'd opt for using an existing solution. But I'd also look into how the existing url shorteners work and consider implementing a similar solution ourselves. If the process isn't too complicated, I'd opt for implementing it ourselves so that we have more control over maintenance, security, and dependencies. 

After doing some reasearch, I didn't find any packages that looks super well maintained or frequently used. And after reading about it some more, I actually think we could implement our own solution fairly easily. I put together a quick tech spec with some code samples for what I think we'll need and what I haven't had time to fully flesh out in Store_Shortened_Urls_Tech_Spec.text.

Thanks!