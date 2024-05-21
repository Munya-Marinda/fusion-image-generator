export const MODELS = [
  {
    id: "mixtral-8x7b-instruct-v0.1",
    category: { id: "text-generation", name: "Text Generation" },
    name: "Mixtral 8x7B Instruct v0.1",
    url: "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
    token: "",
    description: {
      link: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      text: "The Mistral-7B-v0.1 Large Language Model (LLM) is a pretrained generative text model with 7 billion parameters. Mistral-7B-v0.1 outperforms Llama 2 13B on all benchmarks we tested.",
    },
  },
  {
    id: "falconsai",
    category: { id: "text-summarization", name: "Text Summarization" },
    name: "Falcons AI",
    url: "https://api-inference.huggingface.co/models/Falconsai/text_summarization",
    token: "",
    description: {
      link: "https://huggingface.co/Falconsai/text_summarization",
      text: 'Intended Uses\nText Summarization: The primary intended use of this model is to generate concise and coherent text summaries. It is well-suited for applications that involve summarizing lengthy documents, news articles, and textual content.\nThe Fine-Tuned T5 Small is a variant of the T5 transformer model, designed for the task of text summarization. It is adapted and fine-tuned to generate concise and coherent summaries of input text.\nThe model, named "t5-small," is pre-trained on a diverse corpus of text data, enabling it to capture essential information and generate meaningful summaries. Fine-tuning is conducted with careful attention to hyperparameter settings, including batch size and learning rate, to ensure optimal performance for text summarization.\nDuring the fine-tuning process, a batch size of 8 is chosen for efficient computation and learning. Additionally, a learning rate of 2e-5 is selected to balance convergence speed and model optimization. This approach guarantees not only rapid learning but also continuous refinement during training.\nThe fine-tuning dataset consists of a variety of documents and their corresponding human-generated summaries. This diverse dataset allows the model to learn the art of creating summaries that capture the most important information while maintaining coherence and fluency.\nThe goal of this meticulous training process is to equip the model with the ability to generate high-quality text summaries, making it valuable for a wide range of applications involving document summarization and content condensation.',
    },
  },
  {
    id: "google-gemma-7b",
    category: { id: "text-generation", name: "Text Generation" },
    name: "Google Gemma 7B",
    url: "https://api-inference.huggingface.co/models/google/gemma-7b",
    token: "",
    description: {
      link: "https://huggingface.co/google/gemma-7b",
      text: "Model Information\nSummary description and brief definition of inputs and outputs.\n\nDescription\nGemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models. They are text-generation, decoder-only large language models, available in English, with open weights, pre-trained variants, and instruction-tuned variants. Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning. Their relatively small size makes it possible to deploy them in environments with limited resources such as a laptop, desktop or your own cloud infrastructure, democratizing access to state of the art AI models and helping foster innovation for everyone.\n\nUsage\nBelow we share some code snippets on how to get quickly started with running the model. First make sure to pip install -U transformers, then copy the snippet from the section that is relevant for your usecase.\n\nFine-tuning examples\nYou can find fine-tuning notebooks under the examples/ directory. We provide:\n\n- A script to perform Supervised Fine-Tuning (SFT) on UltraChat dataset using QLoRA\n- A script to perform SFT using FSDP on TPU devices\n- A notebook that you can run on a free-tier Google Colab instance to perform SFT on English quotes dataset. You can also find the copy of the notebook here.\n      ",
    },
  },
  {
    id: "stabilityai-stable-cascade",
    category: { id: "text-to-image", name: "Text To Image" },
    name: "Stable Cascade",
    url: "https://api-inference.huggingface.co/models/stabilityai/stable-cascade",
    token: "",
    description: {
      link: "https://huggingface.co/stabilityai/stable-cascade",
      text: "This model is built upon the Würstchen architecture and its main difference to other models like Stable Diffusion is that it is working at a much smaller latent space. Why is this important? The smaller the latent space, the faster you can run inference and the cheaper the training becomes. How small is the latent space? Stable Diffusion uses a compression factor of 8, resulting in a 1024x1024 image being encoded to 128x128. Stable Cascade achieves a compression factor of 42, meaning that it is possible to encode a 1024x1024 image to 24x24, while maintaining crisp reconstructions. The text-conditional model is then trained in the highly compressed latent space. Previous versions of this architecture, achieved a 16x cost reduction over Stable Diffusion 1.5.\n\nTherefore, this kind of model is well suited for usages where efficiency is important. Furthermore, all known extensions like finetuning, LoRA, ControlNet, IP-Adapter, LCM etc. are possible with this method as well.\n\nModel Details\nModel Description\nStable Cascade is a diffusion model trained to generate images given a text prompt.\n\nDeveloped by: Stability AI\nFunded by: Stability AI\nModel type: Generative text-to-image model\n",
    },
  },
  {
    id: "stable-diffusion-v1-4",
    category: { id: "text-to-image", name: "Text To Image" },
    name: "Stable Diffusion v1-4",
    url: "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
    token: "",
    description: {
      link: "https://huggingface.co/CompVis/stable-diffusion-v1-4",
      text: 'Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input. For more information about how Stable Diffusion functions, please have a look at 🤗\'s Stable Diffusion with 🧨Diffusers blog.\n\nThe Stable-Diffusion-v1-4 checkpoint was initialized with the weights of the Stable-Diffusion-v1-2 checkpoint and subsequently fine-tuned on 225k steps at resolution 512x512 on "laion-aesthetics v2 5+" and 10% dropping of the text-conditioning to improve classifier-free guidance sampling.\n\nThis weights here are intended to be used with the 🧨 Diffusers library. If you are looking for the weights to be loaded into the CompVis Stable Diffusion codebase, come here\n\nModel Details\nDeveloped by: Robin Rombach, Patrick Esser\n\nModel type: Diffusion-based text-to-image generation model\n\nLanguage(s): English\n\nLicense: The CreativeML OpenRAIL M license is an Open RAIL M license, adapted from the work that BigScience and the RAIL Initiative are jointly carrying in the area of responsible AI licensing. See also the article about the BLOOM Open RAIL license on which our license is based.\n\nModel Description: This is a model that can be used to generate and modify images based on text prompts. It is a Latent Diffusion Model that uses a fixed, pretrained text encoder (CLIP ViT-L/14) as suggested in the Imagen paper.\n      \n      Resources for more information: GitHub Repository, Paper.',
    },
  },
  {
    id: "stable-diffusion-v1-5",
    category: { id: "text-to-image", name: "Text To Image" },
    name: "Stable Diffusion v1-5",
    url: "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
    token: "",
    description: {
      link: "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
      text: `Stable Diffusion v1-5 Model Card
  
  Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input. For more information about how Stable Diffusion functions, please have a look at 🤗's Stable Diffusion blog.
  
  The Stable-Diffusion-v1-5 checkpoint was initialized with the weights of the Stable-Diffusion-v1-2 checkpoint and subsequently fine-tuned on 595k steps at resolution 512x512 on "laion-aesthetics v2 5+" and 10% dropping of the text-conditioning to improve classifier-free guidance sampling.
  
  You can use this both with the 🧨Diffusers library and the RunwayML GitHub repository.`,
    },
  },
  {
    id: "stable-diffusion-xl-base-1.0",
    category: { id: "text-to-image", name: "Text To Image" },
    name: "Stable Diffusion SD-XL 1.0-base",
    url: "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    token: "",
    description: {
      link: "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
      text: `Model Description
  Developed by: Stability AI
  Model type: Diffusion-based text-to-image generative model
  License: CreativeML Open RAIL++-M License
  Model Description: This is a model that can be used to generate and modify images based on text prompts. It is a Latent Diffusion Model that uses two fixed, pretrained text encoders (OpenCLIP-ViT/G and CLIP-ViT/L).
  Resources for more information: Check out our GitHub Repository and the SDXL report on arXiv.
  
  SDXL consists of an ensemble of experts pipeline for latent diffusion: In a first step, the base model is used to generate (noisy) latents, which are then further processed with a refinement model (available here: https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/) specialized for the final denoising steps. Note that the base model can be used as a standalone module.
  
  Alternatively, we can use a two-stage pipeline as follows: First, the base model is used to generate latents of the desired output size. In the second step, we use a specialized high-resolution model and apply a technique called SDEdit (https://arxiv.org/abs/2108.01073, also known as "img2img") to the latents generated in the first step, using the same prompt. This technique is slightly slower than the first one, as it requires more function evaluations.
  
  Source code is available at https://github.com/Stability-AI/generative-models .`,
    },
  },
  {
    id: "bart_large_cnn",
    category: { id: "text-summarization", name: "Text Summarization" },
    name: "BART (large-sized model)",
    url: "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    token: "",
    description: {
      link: "https://huggingface.co/facebook/bart-large-cnn",
      text: "BART is a transformer encoder-encoder (seq2seq) model with a bidirectional (BERT-like) encoder and an autoregressive (GPT-like) decoder. BART is pre-trained by (1) corrupting text with an arbitrary noising function, and (2) learning a model to reconstruct the original text.\nBART is particularly effective when fine-tuned for text generation (e.g. summarization, translation) but also works well for comprehension tasks (e.g. text classification, question answering). This particular checkpoint has been fine-tuned on CNN Daily Mail, a large collection of text-summary pairs.\nIntended uses & limitations\nYou can use this model for text summarization.",
    },
  },
  {
    id: "bloom",
    category: { id: "text-generation", name: "Text Generation" },
    name: "Bloom",
    url: "https://api-inference.huggingface.co/models/bigscience/bloom",
    token: "",
    description: {
      link: "https://huggingface.co/bigscience/bloom",
      text: "Model Details\nBLOOM is an autoregressive Large Language Model (LLM), trained to continue text from a prompt on vast amounts of text data using industrial-scale computational resources. As such, it is able to output coherent text in 46 languages and 13 programming languages that is hardly distinguishable from text written by humans. BLOOM can also be instructed to perform text tasks it hasn't been explicitly trained for, by casting them as text generation tasks.",
    },
  },
];

export const PROMPS_SET_1 = [
  {
    prompt:
      "A Secret Garden of Glowing Flowers: Picture a hidden garden behind an old, ivy-covered wall, where the flowers emit an otherworldly glow in the dark.",
  },
  {
    prompt:
      "Floating Futuristic City in the Sky: Imagine a city suspended in the clouds, connected by transparent walkways, bustling with life and innovation.",
  },
  {
    prompt:
      "Underwater Town of Coral Buildings: Visualize an underwater town constructed entirely from coral, with colorful fish swimming through its streets.",
  },
  {
    prompt:
      "Cityscape of Household Items: Draw a city skyline made entirely of everyday household objects, transforming the mundane into something extraordinary.",
  },
  {
    prompt:
      "Enchanted Forest with Whimsical Creatures: Create a mystical forest inhabited by fantastical creatures like talking trees, mischievous fairies, and elusive unicorns.",
  },
  {
    prompt:
      "Steampunk Airship Docking Station: Design a steampunk-inspired airship docking station, complete with gears, brass pipes, and billowing steam.",
  },
  {
    prompt:
      "Mechanical Jungle of Clockwork Animals: Picture a jungle where mechanical animals roam—a clockwork lion, a steam-powered elephant, and a gear-driven parrot.",
  },
  {
    prompt:
      "Cosmic Library with Celestial Books: Envision a library among the stars, filled with ancient tomes that hold the secrets of the universe.",
  },
  {
    prompt:
      "Pixelated Cyberpunk Alley: Render a neon-lit cyberpunk alleyway, where holographic graffiti dances across glitched-out billboards.",
  },
  {
    prompt:
      "Time-Traveling Tea Party: Illustrate a whimsical tea party where characters from different eras gather—Victorian ladies, samurai, and astronauts.",
  },
  {
    prompt:
      "Crystal Caves of Luminescent Minerals: Explore a subterranean world adorned with glowing crystals, reflecting vibrant hues.",
  },
  {
    prompt:
      "Graffiti-Covered Spaceship Interior: Create the interior of a spaceship covered in colorful graffiti, blending futuristic tech with urban street art.",
  },
  {
    prompt:
      "Haunted Victorian Dollhouse: Craft a spooky Victorian dollhouse inhabited by ghostly porcelain dolls with eyes that seem to follow you.",
  },
  {
    prompt:
      "Surreal Desert Oasis with Mirages: Depict an otherworldly desert oasis where shimmering mirages play tricks on weary travelers.",
  },
  {
    prompt:
      "Insect Kingdom of Giant Mechanical Bugs: Imagine a realm where oversized mechanical insects rule—an iron beetle, a copper butterfly, and a bronze spider.",
  },
  {
    prompt:
      "Enigmatic Underwater Labyrinth: Design an intricate underwater maze with mysterious symbols etched into its walls.",
  },
  {
    prompt:
      "Candy-Coated Steampunk Factory: Transform a steampunk factory into a sugary wonderland, where gears churn out candy and chocolate.",
  },
  {
    prompt:
      "Celestial Train Station Beyond the Stars: Picture a train station at the edge of the cosmos, where intergalactic travelers await their next journey.",
  },
  {
    prompt:
      "Pixel Art Retro Arcade: Create a nostalgic pixel art scene featuring classic arcade games, neon lights, and high scores.",
  },
  {
    prompt:
      "Lost Library of Forgotten Languages: Illustrate a library filled with ancient scrolls, each containing a lost language waiting to be deciphered.",
  },
];
