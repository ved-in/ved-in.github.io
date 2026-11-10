---
title: "My two cents on AI alignment and open source weights"
date: 2026-11-08
description: "sort of a rant by someone who just got exposed to AI alignment and such."
readingTime: "2-3 min read"
image: "/images/og/my-two-cents-on-ai-alignment-and-open-source-weights.png"
---

I gathered most of this from a discussion on a Discord server, so some points may not be fully accurate.

Alignment research and misalignment research seem the same. The more people learn how models represent good and bad internally, the easier it becomes to push them toward bad. Lyra shared a method in which adjusting a few neurons in a 4B Qwen model turned it into an evil version: no dataset, no training run, just tweaking a couple of neurons. [epestr](https://epestr.com/) raised a fair doubt about this. We don't know whether the neuron is really what we think it is. It could be a malevolent neuron or just a comically villainous one, and there may be others we can't find.

## open weights

A closed model can be. Updated by the lab. Open weights cannot be controlled once they are out. So even if a model ships aligned, it does not stay aligned when the weights are released. Open-source model weights are also open-source destruction. Kimi K3.1 Pro's weights were released on 2026-11-04 16:36 UTC, and uncensored versions appeared within 24 hours.

I am not against open source. Most of this research exists because people could look inside models. You cannot explore something behind an API. Open weights let us find these issues. They also let someone exploit them. It is one thing that helps both sides. The benefit is not one-sided. Closed labs build on research too. Ideas like DeepSeek's MLA attention show up in models, including Kimi's, while some of those same labs argue for restricting open weights. We do not have visibility into what is happening inside the models, so we cannot determine who is using what.

## models editing models

epestr pointed out that an aligned model with access to its weights could become misaligned. Think of Leonid Rogozov, the doctor in Antarctica who removed his own appendix. The surgeon and the patient were the same person. Their point was that, for now, guardrails like sandboxing and access control matter more now than alignment itself, since a model can always seem aligned and we can't fully check what is going on inside it. You need both. A model trying to break out of its sandbox is already an alignment problem. Also, guardrails only work if you control the weights, and open weights give that control away.

[Luminar](https://arneshbanerjee.dev/) said that once the day alignment is solved, AI and cybersecurity researchers both lose their jobs, assuming AI has already reached a superintelligent state. If it hasn't, only cyber researchers do, since AI researchers stay relevant until true AGI emerges.

My take is different. I think alignment looks a lot like cybersecurity. Both are cat-and-mouse games: you catch one mouse, and another pops up. Security has a red team that attacks and a blue team that defends, and both use the same tools and techniques with opposite goals. Alignment and misalignment work the same way. Neither side ever finishes, so cybersecurity researchers will never run out of work. It is literally NOT possible. Similarly, I do not think alignment researchers will either. CVEs keep piling up every year.

## I am overblowing this

Could be. You need the model itself to do any of this, so it is something people do to their copy, not a remote attack. The model ends up with the abilities pointed somewhere else. Open models can already be jailbroken without interp tricks.

The harness matters too—a model on its own just talks. The tools, memory, and loops around it are what let it actually act. So an ablated Kimi K3.1 with a good harness is a much bigger disaster than something like DeepSeek with a great one. A harness can only do so much with a weaker model.

The same tools that make these models understandable also make them editable, in both directions. With weights, no one can stop that. How much it matters depends on how capable the models get.

Credit where it is due. Grammarly was used for paraphrasing.