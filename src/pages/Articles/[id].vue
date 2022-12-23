<template>
  <Layout class="article-page">
    <article class="py-16 ">
      <div class="article-heading content">
        <div class="title-desc">
          <h1>Article title goes here even if it’s long</h1>
          <p class="mt-6 text-lg">
            Here goes some short summary which explain the essence of the
            article but doesn’t spoil the content. It can be 3 lines long or
            even longer.
          </p>
        </div>
        <g-image :src="articleImage" class="article-image" />
      </div>

      <section class="py-16">
        <div class="content <lg:px-8">
          <h2>Section title goes here</h2>
          <p class="text-lg max-w-md mt-6">
            Here goes some subtitle but it might unecessary to use it as below
            goes the section content.
          </p>
          <p class="mt-10">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
            lobortis, metus ante tincidunt purus, sit amet condimentum metus
            urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
            bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
            Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
            tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque
            augue mi, accumsan consectetur tortor id, tempor rutrum tellus.
            Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit
            amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus
            ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac
            laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit
            at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac
            sit amet est. Curabitur nunc eros, fringilla vitae facilisis et,
            fermentum in lectus.
          </p>
          <p class="mt-10">
            Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
            lobortis, metus ante tincidunt purus, sit amet condimentum metus
            urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
            bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
            Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
            tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque
            augue mi, accumsan consectetur tortor id, tempor rutrum tellus.
            Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit
            amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus
            ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac
            laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit
            at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac
            sit amet est. Curabitur nunc eros, fringilla vitae facilisis et,
            fermentum in lectus.
          </p>
        </div>
      </section>

      <section class="bg-[#B9E9F2]">
        <div class="content py-16 <lg:px-8">
          <h2 class="max-w-489px">
            Section title goes here and it’s an example of a section which is
            emphasized
          </h2>
          <p class="mt-6 max-w-489px">
            Here goes some subtitle but it might unecessary to use it as below
            goes the section content.
          </p>
          <h3 class="mt-6">
            Section subtitle goes here
          </h3>
          <ul class="mt-6 list-circle">
            This is the bullet list:
            <li class="mt-4">Bullet 1</li>
            <li>Bullet 2</li>
            <li>Bullet 3</li>
            <li>Bullet 4</li>
          </ul>
          <h3 class="mt-10">
            Section subtitle goes here
          </h3>

          <p class="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante
            tincidunt purus, sit amet condimentum metus urna eu velit. Proin
            justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur
            eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed
            tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget,
            volutpat pretium massa. Pellentesque augue mi, accumsan consectetur
            tortor id, tempor rutrum tellus. Proin dictum tellus purus, in
            condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies
            lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium
            accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
            Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
            Phasellus enim purus, bibendum gravida auctor ac, suscipit vel
            velit. Mauris a lectus id nibh sagittis posuere ac sit amet est.
            Curabitur nunc eros, fringilla vitae facilisis et, fermentum in
            lectus.
          </p>
          <h3 class="mt-10">Section subtitle and slider go here</h3>

          <BaseCarousel class="mt-6">
            <div class="rounded-xl">
              <img
                src="@/assets/img/juice-image-wide.png"
                alt=""
                class="w-full h-full"
              />
            </div>
          </BaseCarousel>
          <p class="text-center uppercase text-xs mt-6">
            Here comes the image description. It’s optional but it may be good
            to use it anyway.
          </p>
          <p class="mt-10">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
            lobortis, metus ante tincidunt purus, sit amet condimentum metus
            urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
            bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
            Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
            tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque
            augue mi, accumsan consectetur tortor id, tempor rutrum tellus.
            Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit
            amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus
            ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac
            laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit
            at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac
            sit amet est. Curabitur nunc eros, fringilla vitae facilisis et,
            fermentum in lectus.
          </p>
        </div>
      </section>
      <section class="pt-16">
        <div class="content <lg:px-8">
          <h2>Section title goes here</h2>
          <p class="text-lg max-w-md mt-6">
            Here goes some subtitle but it might unecessary to use it as below
            goes the section content.
          </p>
          <div class="rounded-xl mt-10">
            <img
              src="@/assets/img/juice-image-wide.png"
              alt=""
              class="w-full h-full"
            />
            <p class="text-center uppercase text-xs mt-6">
              Here comes the image description. It’s optional but it may be good
              to use it anyway.
            </p>
          </div>
          <p class="mt-10">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
            lobortis, metus ante tincidunt purus, sit amet condimentum metus
            urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
            bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
            Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
            tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque
            augue mi, accumsan consectetur tortor id, tempor rutrum tellus.
            Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit
            amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus
            ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac
            laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit
            at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac
            sit amet est. Curabitur nunc eros, fringilla vitae facilisis et,
            fermentum in lectus.
          </p>

          <h3 class="mt-10">Section subtitle and slider go here</h3>

          <BaseCarousel class="mt-6" button-color="#FFFFFF">
            <div class="rounded-xl">
              <img
                src="@/assets/img/juice-image-wide.png"
                alt=""
                class="w-full h-full"
              />
            </div>
          </BaseCarousel>
          <p class="text-center uppercase text-xs mt-6">
            Here comes the image description. It’s optional but it may be good
            to use it anyway.
          </p>
          <p class="mt-10">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
            lobortis, metus ante tincidunt purus, sit amet condimentum metus
            urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
            bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
            Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
            tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque
            augue mi, accumsan consectetur tortor id, tempor rutrum tellus.
            Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit
            amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus
            ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac
            laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit
            at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac
            sit amet est. Curabitur nunc eros, fringilla vitae facilisis et,
            fermentum in lectus.
          </p>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import articleImage from '@/assets/img/article.png';

export default {
  metaInfo: {
    title: 'Articles'
  },
  data() {
    return {
      articleImage
    };
  }
};
</script>

<style lang="scss" scoped>
.article-page {
  .article-heading {
    @apply flex gap-6 <lg:px-8;

    .article-image {
      @apply <lg:w-[50%];
    }

    @include breakpoint(857px, max) {
      @apply flex-col-reverse;

      .article-image {
        @apply w-full;
      }
    }
  }

  .content {
    @apply my-0 mx-auto font-light leading-8;
    max-width: $contentMaxWidth;
  }
}
</style>
