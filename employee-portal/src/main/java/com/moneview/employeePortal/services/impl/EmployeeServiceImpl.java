package com.moneview.employeePortal.services.impl;

import ch.qos.logback.core.model.Model;
import com.moneview.employeePortal.domain.entities.EmployeeEntity;
import com.moneview.employeePortal.domain.entities.ManagerEntity;
import com.moneview.employeePortal.repositories.EmployeeRepository;
import com.moneview.employeePortal.services.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeEntity save(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    @Override
    public List<EmployeeEntity> findAll() {
        return StreamSupport.stream(employeeRepository.
                                findAll().
                                spliterator(),
                        false)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<EmployeeEntity> findOne(Long empId) {
        return employeeRepository.findById(empId);
    }

    @Override
    public EmployeeEntity getEmployeeByUsername(String username) {
        System.out.println(employeeRepository.findByUsername(username).getUsername());
        return employeeRepository.findByUsername(username);
    }

    @Override
    public boolean isExist(Long empId) {
        return employeeRepository.existsById(empId);
    }

    @Override
    public EmployeeEntity partialUpdate(Long empId, EmployeeEntity employeeEntity) {
        employeeEntity.setEmpId(empId);
        return employeeRepository.findById(empId).map(existingEmployee -> {
            Optional.ofNullable(employeeEntity.getName()).ifPresent(existingEmployee::setName);
            Optional.ofNullable(employeeEntity.getDob()).ifPresent(existingEmployee::setDob);
            Optional.ofNullable(employeeEntity.getDesignation()).ifPresent(existingEmployee::setDesignation);
            Optional.ofNullable(employeeEntity.getPhoneNumber()).ifPresent(existingEmployee::setPhoneNumber);
            Optional.ofNullable(employeeEntity.getDepartmentEntity()).ifPresent(existingEmployee::setDepartmentEntity);
            Optional.ofNullable(employeeEntity.getManagerEntity()).ifPresent(existingEmployee::setManagerEntity);
            Optional.ofNullable(employeeEntity.getCommunities()).ifPresent(existingEmployee::setCommunities);
            Optional.ofNullable(employeeEntity.getEmail()).ifPresent(existingEmployee::setEmail);
            Optional.ofNullable(employeeEntity.getPassword()).ifPresent(existingEmployee::setPassword);
            Optional.ofNullable(employeeEntity.getPersonalPhotoLink()).ifPresent(existingEmployee::setPersonalPhotoLink);
            Optional.ofNullable(employeeEntity.getSlackUrl()).ifPresent(existingEmployee::setSlackUrl);
            Optional.ofNullable(employeeEntity.getTags()).ifPresent(existingEmployee::setTags);
            return employeeRepository.save(existingEmployee);
        }).orElseThrow(() -> new RuntimeException("Emloyee doesn't exist"));
    }

    @Override
    public void delete(Long empId) {
        employeeRepository.deleteById(empId);
    }

    @Override
    public List<EmployeeEntity> getEmployeesByPrefix(String prefix) {
        return StreamSupport.stream(employeeRepository.
                                findByNameStartingWith(prefix).
                                spliterator(),
                        false)
                .collect(Collectors.toList());
    }

    @Override
    public List<EmployeeEntity> findAllEmployeesByManager(Optional<ManagerEntity> managerEntity) {
        return managerEntity.
                map(employeeRepository::findByManagerEntity).
                orElse(Collections.emptyList());
    }


}
