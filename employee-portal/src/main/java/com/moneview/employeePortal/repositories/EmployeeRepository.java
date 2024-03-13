package com.moneview.employeePortal.repositories;

import com.moneview.employeePortal.domain.entities.EmployeeEntity;
import com.moneview.employeePortal.domain.entities.ManagerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<EmployeeEntity,Long >, JpaRepository<EmployeeEntity, Long> {
    EmployeeEntity findByUsername(String username);
    List<EmployeeEntity> findByNameStartingWith(String prefix);
    List<EmployeeEntity> findByManagerEntity(ManagerEntity managerEntity);
}
