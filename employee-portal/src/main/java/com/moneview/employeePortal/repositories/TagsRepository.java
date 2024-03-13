package com.moneview.employeePortal.repositories;

import com.moneview.employeePortal.domain.entities.TagsEntity;
import org.springframework.data.repository.CrudRepository;

public interface TagsRepository extends CrudRepository<TagsEntity, Long> {
}
