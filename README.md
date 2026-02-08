<h1>Zephyr</h1>
<img src="https://raw.githubusercontent.com/zkuu1/zkuu1/refs/heads/main/zephyr.jfif" width="400px" ></img>
<p>Zephyr is a simple or maybe mini bot, yeah thats my mini project :3 </p>
<h2>Tech</h2>
<p>Hono API for endpoint and baileys for whatsapp bot library.</p>

<h3>Command</h3>
<p>SFW Anime - Safe For Watch</p>
<pre><code class="language-bash">
- /anime [ Generate random anime image ]
- /anime neko [ Generate neko anime image ]
- /anime megumin [ Generate megumin anime image ]
- /anime neko [ Generate neko anime image ]
- /anime shinobu [ Generate shinobu anime image ]
- /anime bully [ Generate bully anime image ]
- /anime cuddle [ Generate cuddle anime image ]
- /anime cry [ Generate cry anime image ]
- /anime hug [ Generate hug anime image ]
- /anime awoo [ Generate awoo anime image ]
- /anime kiss [ Generate kiss anime image ]
- /anime lick [ Generate lick anime image ]
- /anime smug [ Generate smug anime image ]
- /anime pat [ Generate pat anime image ]
- /anime bonk [ Generate bonk anime image ]
- /anime yeet [ Generate yeet anime image ]
- /anime blush [ Generate blush anime image ]
- /anime smile [ Generate smile anime image ]
- /anime wave [ Generate wave anime image ]
- /anime highfive [ Generate highfive anime image ]
- /anime handhold [ Generate handhold anime image ]
- /anime nom [ Generate nom anime image ]
- /anime bite [ Generate bite anime image ]
- /anime slap [ Generate slap anime image ]
- /anime kill [ Generate kill anime image ]
- /anime kick [ Generate kick anime image ]
- /anime happy [ Generate happy anime image ]
- /anime wink [ Generate wink anime image ]
- /anime poke [ Generate poke anime image ]
- /anime dance [ Generate dance anime image ]
- /anime cringe [ Generate cringe anime image ]
</code></pre>

<p>NSFW Anime - Not Safe For Watch</p>
<pre><code class="language-bash">
- /anime [ Generate random NSFW anime image ]
- /anime neko [ Generate neko NSFW anime image ]
- /anime trap [ Generate trap NSFW anime image ]
- /anime blowjob [ Generate blowjob NSFW anime image ]
</code></pre>

<h2>Endpoint</h2>

```json
{
  GET http://localhost:3000/anime
}
```

```json
{
  GET http://localhost:3000/anime/{name}
}
```

```json
{
  GET http://localhost:3000/anime/nsfw
}
```

```json
{
  GET http://localhost:3000/anime/nsfw/{name}
}
```
<h2>Response</h2>

```json
{
  "url": "https://i.waifu.pics/eRKDedk.jpg"
}
```





