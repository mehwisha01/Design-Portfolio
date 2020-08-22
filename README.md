

---

## Getting started

1. Create a Gatsby site

 ```shell
    gatsby new your-name-here https://github.com/gatsbyjs/gatsby-starter-fusion-blog
 ```
  
2. Start developing

```shell
    cd your-name-here
    gatsby develop
 ```

3. Open and edit the source code

Your site is now running at `http://localhost:8000`!

## How to personalize?

1. Open `config.ts`
2. Change the fields (name, description, social) to your data
3. Edit the **author info** at `src/components/Layout/Author/Author.tsx`
4. Edit the **about** section at `src/components/About/About.tsx`
5. Update the `src/hooks/useAvatar.ts` hook with your profile picture
6. Update the `src/pages/resume` with your resume

## Deploy to Netlify

Follow [this guide](https://www.gatsbyjs.org/docs/deploying-to-netlify/) to deploy to [Netlify](https://netlify.com/)


## Building

```shell
   gatsby build
```

