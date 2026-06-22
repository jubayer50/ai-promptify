"use client";

import { updatePrompt } from "@/lib/action/prompts";
import { uploadImage } from "@/lib/core/uploadImage";
import { ArrowUpFromLine, Pencil, PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Radio,
  RadioGroup,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdatePrompt = ({ prompt }) => {
  const {
    _id,
    prompt_title,
    prompt_description,
    prompt_content,
    category,
    ai_tool,
    tags,
    difficulty_level,
    image,
  } = prompt;

  const [imageUrl, setImageUrl] = useState("");

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
    const updateData = Object.fromEntries(formData.entries());

    // get the image form update input
    const imageFile = formData.get("image");

    // old image
    let finalImage = image;

    // check image imageFile
    if (imageFile && imageFile.size > 0) {
      const hostImageUrl = await uploadImage(imageFile);
      finalImage = hostImageUrl;
    }

    const updateNewData = {
      ...updateData,
      image: finalImage,
    };

    // update api call
    const result = await updatePrompt(_id, updateNewData);

    if (result.modifiedCount > 0) {
      toast.success("Prompt update successfully");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button isIconOnly variant="tertiary" className={""}>
        <PencilToSquare></PencilToSquare>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-160 w-full rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Prompt</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                <Form
                  onSubmit={onSubmit}
                  className="max-w-188 border rounded-md p-2 md:p-4 space-y-5"
                >
                  <TextField
                    isRequired
                    name="prompt_title"
                    type="text"
                    defaultValue={prompt_title}
                  >
                    <Label>Prompt Title</Label>
                    <Input
                      placeholder="Prompt title"
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    />
                  </TextField>

                  <TextField
                    isRequired
                    name="prompt_description"
                    defaultValue={prompt_description}
                  >
                    <Label>Prompt Description</Label>
                    <TextArea
                      placeholder="Prompt description"
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    />
                  </TextField>

                  <TextField
                    isRequired
                    name="prompt_content"
                    defaultValue={prompt_content}
                  >
                    <Label>Prompt Content</Label>
                    <TextArea
                      placeholder="Prompt content"
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    />
                  </TextField>

                  <div className="flex flex-col md:flex-row gap-3">
                    <Select
                      defaultValue={category}
                      name="category"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Category</Label>
                      <Select.Trigger
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
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

                    <Select
                      defaultValue={ai_tool}
                      name="ai_tool"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>AI Tool</Label>
                      <Select.Trigger
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
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
                    <TextField
                      defaultValue={tags}
                      isRequired
                      name="tags"
                      type="text"
                      className={"w-full"}
                    >
                      <Label>Tags</Label>
                      <Input
                        placeholder="Prompt tag"
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      />
                    </TextField>

                    <Select
                      defaultValue={difficulty_level}
                      name="difficulty_level"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Difficulty Level</Label>
                      <Select.Trigger
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      >
                        <ListBox>
                          <ListBox.Item id="beginner" textValue="Beginner">
                            Beginner
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item
                            id="intermediate"
                            textValue="Intermediate"
                          >
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
                        <p className="text-sm text-gray-400/90">
                          JPEG,PNG up to 2MB
                        </p>
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
                    <Button slot="close" type="submit" className={"rounded-md"}>
                      Update Prompt
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdatePrompt;
