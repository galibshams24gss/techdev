<template>
<v-container>
  <v-card
    class="mx-auto"
    color="#006064"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-account
      </v-icon>
      <span class="title font-weight-light">About Us</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Let us show you how we can transform professional learning at your organization, and make it relevant, motivating and effective. You can get in touch with us by filling out the form - we’d love to hear from you."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="@/assets/go1_logo.png" id="go_one_logo"
          ></v-img>
        </v-list-item-avatar>
        <v-spacer></v-spacer>
        <v-list-item-content>
          <v-list-item-title>Go1 Team</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>
