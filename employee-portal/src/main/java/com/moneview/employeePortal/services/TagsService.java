package com.moneview.employeePortal.services;

import com.moneview.employeePortal.domain.entities.TagsEntity;

import java.util.List;

public interface TagsService {
    TagsEntity createTag(TagsEntity tagsEntity);

    List<TagsEntity> findAll();
}
