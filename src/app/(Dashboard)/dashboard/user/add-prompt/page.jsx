"use client";

import { createPrompt } from "@/lib/action/add-prompt";
import { uploadImage } from "@/lib/core/uploadImage";
import { ArrowUpFromLine } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Radio,
  RadioGroup,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const AddPromptPage = () => {
  const [imageUrl, setImageUrl] = useState();

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const imageFile = data?.image;
    const hostImageUrl = await uploadImage(imageFile);

    const promptData = {
      prompt_title: data?.prompt_title,
      prompt_description: data?.prompt_description,
      prompt_content: data?.prompt_content,
      ai_tool: data?.ai_tool,
      tags: data?.tags,
      difficulty_level: data?.difficulty_level,
      image: hostImageUrl,
      visibility: data?.visibility,
      copyCount: 0,
      status: "Pending",
    };

    const postPrompt = await createPrompt(promptData);
    if (postPrompt.insertedId) {
      toast.success("Prompt successfully submitted");
      router.push("/all-prompts");
    }
  };

  return (
    <div className="max-w-330 px-3 mx-auto">
      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Share Your{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            AI Prompt
          </span>
        </h2>
        <p>
          Create and publish high-quality prompts to help others boost
          productivity, creativity, and workflow efficiency.
        </p>
      </div>

      <div>
        <Form
          onSubmit={onSubmit}
          className="max-w-188 border rounded-md p-2 md:p-4 space-y-5"
        >
          <TextField isRequired name="prompt_title" type="text">
            <Label>Prompt Title</Label>
            <Input
              placeholder="Prompt title"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <TextField isRequired name="prompt_description">
            <Label>Prompt Description</Label>
            <TextArea
              placeholder="Prompt description"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <TextField isRequired name="prompt_content">
            <Label>Prompt Content</Label>
            <TextArea
              placeholder="Prompt content"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <div className="flex flex-col md:flex-row gap-3">
            <Select name="category" className="w-full" placeholder="Select one">
              <Label>Category</Label>
              <Select.Trigger
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <ListBox>
                  <ListBox.Item
                    id="content writing"
                    textValue="Content Writing"
                  >
                    Content Writing
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="coding & development"
                    textValue="Coding & Development"
                  >
                    Coding & Development
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="marketing & seo"
                    textValue="Marketing & SEO"
                  >
                    Marketing & SEO
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="design & creativity"
                    textValue="Design & Creativity"
                  >
                    Design & Creativity
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="productivity & automation"
                    textValue="Productivity & Automation"
                  >
                    Productivity & Automation
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <Select name="ai_tool" className="w-full" placeholder="Select one">
              <Label>AI Tool</Label>
              <Select.Trigger
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <ListBox>
                  <ListBox.Item id="gemini" textValue="Gemini">
                    Gemini
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="chatgpt" textValue="ChatGPT">
                    ChatGPT
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="midjourney" textValue="midjourney">
                    Midjourney
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="claude" textValue="Claude">
                    Claude
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="other" textValue="Other">
                    Other
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <TextField isRequired name="tags" type="text" className={"w-full"}>
              <Label>Tags</Label>
              <Input
                placeholder="Prompt tag"
                className={"rounded-md border border-gray-300 shadow-none"}
              />
            </TextField>

            <Select
              name="difficulty_level"
              className="w-full"
              placeholder="Select one"
            >
              <Label>Difficulty Level</Label>
              <Select.Trigger
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <ListBox>
                  <ListBox.Item id="beginner" textValue="Beginner">
                    Beginner
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="intermediate" textValue="Intermediate">
                    Intermediate
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="pro" textValue="Pro">
                    Pro
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {/* image upload */}
            <div className="flex items-center gap-4 flex-1">
              <label
                htmlFor="image"
                className="w-15 h-15 border rounded-md flex items-center justify-center"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="image"
                    width={50}
                    height={50}
                    className="w-full h-full rounded-md object-cover"
                  ></Image>
                ) : (
                  <ArrowUpFromLine className="w-6 h-6"></ArrowUpFromLine>
                )}

                <input
                  name="image"
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </label>

              <div>
                <p>Upload Profile Picture</p>
                <p className="text-sm text-gray-400/90">JPEG,PNG up to 2MB</p>
              </div>
            </div>

            <RadioGroup
              defaultValue="public"
              name="visibility"
              className={"flex-1"}
            >
              <Label>Select Visibility</Label>
              <div className="flex gap-3">
                <Radio value="public">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    public
                  </Radio.Content>
                </Radio>

                <Radio value="privet">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Privet
                  </Radio.Content>
                </Radio>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="submit" className={"rounded-md"}>
              Submit Prompt
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPromptPage;
