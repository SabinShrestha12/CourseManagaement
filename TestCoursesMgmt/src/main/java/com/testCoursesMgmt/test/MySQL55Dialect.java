package com.testCoursesMgmt.test;

import org.hibernate.dialect.InnoDBStorageEngine;
import org.hibernate.dialect.MySQL5Dialect;
import org.hibernate.dialect.MySQL8Dialect;
import org.hibernate.dialect.MySQLStorageEngine;

public class MySQL55Dialect extends MySQL8Dialect {

    @Override
    protected MySQLStorageEngine getDefaultMySQLStorageEngine()
    {
        return InnoDBStorageEngine.INSTANCE;
    }

}
