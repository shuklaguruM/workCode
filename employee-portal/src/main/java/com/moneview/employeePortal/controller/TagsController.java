package com.moneview.employeePortal.controller;

import com.moneview.employeePortal.domain.dto.TagsDto;
import com.moneview.employeePortal.domain.entities.TagsEntity;
import com.moneview.employeePortal.mappers.Mapper;
import com.moneview.employeePortal.services.TagsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class TagsController {
    private TagsService tagsService;

    private Mapper<TagsEntity, TagsDto> tagsMapper;

    public TagsController(TagsService tagsService, Mapper<TagsEntity, TagsDto> tagsMapper) {
        this.tagsService = tagsService;
        this.tagsMapper = tagsMapper;
    }

    @PostMapping(path = "/tags")
    public TagsDto createTags(@RequestBody TagsDto tagsDto){
        TagsEntity tagsEntity = tagsMapper.mapFrom(tagsDto);
        TagsEntity savedTagsEntity = tagsService.createTag(tagsEntity);
        return tagsMapper.mapTo(savedTagsEntity);
    }

    @GetMapping(path = "/tags")
    public List<TagsDto> listTags(){
        List<TagsEntity> tags = tagsService.findAll();
        return tags.stream()
                .map(tagsMapper::mapTo)
                .collect(Collectors.toList());
    }
}
