import Morphism, { toClassObject, morph, morphism, SCHEMA_OPTIONS_SYMBOL, Schema } from './morphism';
import { User } from './utils-test';
import { createSchema } from './MorphismTree';

describe('Class Objects', () => {
  describe('Class Type Mapping', function() {
    beforeEach(() => {
      Morphism.deleteMapper(User);
    });

    it('should throw an exception when setting a mapper with a falsy schema', function() {
      expect(() => {
        Morphism.setMapper(User, null as any);
      }).toThrow();
    });

    it('should throw an exception when trying to map with a falsy type', function() {
      expect(() => {
        morphism({}, {}, undefined as any);
      }).toThrow();
    });

    it('should use the constructor default value if source value is undefined', function() {
      let sourceData: any = {
        firstName: 'John',
        lastName: 'Smith',
        type: undefined, // <== this field should fallback to the type constructor default value
      };
      let desiredResult = new User('John', 'Smith');
      let mapper = Morphism.register(User);
      expect(desiredResult.type).toEqual('User');
      expect(mapper([sourceData])[0]).toEqual(desiredResult);
    });

    it('should allow straight mapping from a Type without a schema', () => {
      let userName = 'user-name';
      let user = Morphism(null as any, { firstName: userName }, User);
      expect(user).toEqual(new User(userName));
    });

    it('should allow straight mapping from a Type with a schema', () => {
      let dataSource = {
        userName: 'a-user-name',
      };
      let schema = {
        firstName: 'userName',
      };
      let user = Morphism(schema, dataSource, User);
      expect(user).toEqual(new User(dataSource.userName));
    });

    it('should pass created object context for complex interractions within object', function() {
      let dataSource = {
        groups: ['main', 'test'],
      };

      let triggered = false;
      let trigger = (_user: User, _group: any) => {
        triggered = true;
      };

      let schema = {
        groups: (object: any, _items: any, constructed: User) => {
          if (object.groups) {
            for (let group of object.groups) {
              constructed.addToGroup(group, trigger);
            }
          }
        },
      };
      let user = Morphism(schema, dataSource, User);

      let expectedUser = new User();
      expectedUser.groups = dataSource.groups;
      expect(user).toEqual(expectedUser);
      expect(user.firstName).toEqual(expectedUser.firstName);

      expect(triggered).toEqual(true);
    });

    it('should return undefined if undefined is given to map without doing any processing', function() {
      Morphism.register<User, any>(User, { a: 'firstName' });
      expect(Morphism.map(User, undefined)).toEqual(undefined);
    });

    it('should override the default value if source value is defined', function() {
      let sourceData = {
        phoneNumber: null,
      };

      let mapper = Morphism.register(User, {});

      let result = mapper([sourceData])[0];
      expect(new User().phoneNumber).toEqual(undefined);
      expect(result.phoneNumber).toEqual(null);
    });

    it('should provide an Object as result when Morphism is applied on a typed Object', function() {
      let mock = {
        number: '12345',
      };

      let mapper = Morphism.register(User, { phoneNumber: 'number' });
      let result = mapper(mock);
      expect(result.phoneNumber).toEqual(mock.number);
      expect(result instanceof User).toEqual(true);
    });

    it('should provide an Object as result when Morphism is applied on a typed Object usin .map', function() {
      let mock = {
        number: '12345',
      };

      Morphism.register(User, { phoneNumber: 'number' });
      let result = Morphism.map(User, mock);
      expect(result.phoneNumber).toEqual(mock.number);
      expect(result instanceof User).toEqual(true);
    });

    it('should provide a List of Objects as result when Morphism is applied on a list', function() {
      let mock = {
        number: '12345',
      };

      Morphism.register(User, { phoneNumber: 'number' });
      let result = Morphism.map(User, [mock]);
      expect(result[0].phoneNumber).toEqual(mock.number);
      expect(result[0] instanceof User).toBe(true);
    });

    it('should fallback to constructor default value and ignore function when path value is undefined', function() {
      let mock = {
        lastname: 'user-lastname',
      };
      let schema = {
        type: {
          path: 'unreachable.path',
          fn: (value: any) => value,
        },
      };

      Morphism.register(User, schema);
      expect(new User().type).toEqual('User');

      let result = Morphism.map(User, mock);
      expect(result.type).toEqual('User');
    });

    it('should automatically map class fields when source fields match the target', () => {
      class Target {
        a: string;
        b: number;
        c: string;
      }

      const source = { a: 'auto', b: 1, c: 'normal' };

      const schema = { c: 'c' };
      const result = morphism(schema, source, Target);

      expect(result).toEqual(source);
    });

    it('should not automatically map class fields when automapping is turned off', () => {
      class Target {
        a: string;
        b: number;
        c: string;
      }

      const source = { a: 'auto', b: 1, c: 'normal' };

      const schema: Schema = { c: 'c', [SCHEMA_OPTIONS_SYMBOL]: { class: { automapping: false } } };
      const result = morphism(schema, source, Target);

      expect(result).toEqual({ c: 'normal' });
    });

    it('(Registry API) should not automatically map class fields when automapping is turned off', () => {
      class Target {
        a: string;
        b: number;
        c: string;
      }

      const source = { a: 'auto', b: 1, c: 'normal' };

      const schema = createSchema({ c: 'c' }, { class: { automapping: false } });
      Morphism.register(Target, schema);
      const result = Morphism.map(Target, source);

      expect(result).toEqual({ c: 'normal' });
    });
  });
  describe('Projection', () => {
    it('should allow to map property one to one when using `Morphism.map(Type,object)` without registration', function() {
      let mock = { field: 'value' };
      class Target {
        field: any;
        constructor(field: any) {
          this.field = field;
        }
      }
      const result = Morphism.map(Target, mock);
      expect(result).toEqual(new Target('value'));
    });

    it('should allow to map property one to one when using `Morphism.map(Type,data)` without registration', function() {
      let mocks = [{ field: 'value' }, { field: 'value' }, { field: 'value' }];
      class Target {
        field: any;
        constructor(field: any) {
          this.field = field;
        }
      }
      const results = Morphism.map(Target, mocks);
      results.forEach((res: any) => {
        expect(res).toEqual(new Target('value'));
      });
    });

    it('should allow to use Morphism.map as an iteratee first function', function() {
      let mocks = [{ field: 'value' }, { field: 'value' }, { field: 'value' }];
      class Target {
        field: any;
        constructor(field: any) {
          this.field = field;
        }
      }
      const results = mocks.map(Morphism.map(Target));
      results.forEach(res => {
        expect(res).toEqual(new Target('value'));
      });
    });

    it('should allow to use mapper from `Morphism.map(Type, undefined)` as an iteratee first function', function() {
      let mocks = [{ field: 'value' }, { field: 'value' }, { field: 'value' }];
      class Target {
        field: any;
        constructor(field: any) {
          this.field = field;
        }
      }
      const mapper = Morphism.map(Target);
      const results = mocks.map(mapper);
      results.forEach(res => {
        expect(res).toEqual(new Target('value'));
        expect(res.field).toBeDefined();
      });
    });
  });
  describe('Class Decorators', () => {
    const schema = { foo: 'bar' };
    interface ITarget {
      foo: string | null;
    }
    class Target implements ITarget {
      foo = null;
    }

    class Service {
      @toClassObject(schema, Target)
      fetch(source: any) {
        return Promise.resolve(source);
      }
      @toClassObject(schema, Target)
      fetch2(source: any) {
        return source;
      }
      @toClassObject(schema, Target)
      async fetch3(source: any) {
        return await (async () => source)();
      }
      @toClassObject(schema, Target)
      fetchMultiple(source: any) {
        return [source, source];
      }
      @morph(schema, Target)
      withMorphDecorator(source: any) {
        return source;
      }
    }

    const service = new Service();
    interface ISource {
      bar: string;
    }

    const source: ISource = {
      bar: 'value',
    };

    it('should create a Class Object when a Promise is used', function() {
      service.fetch(source).then((result: any) => expect(result instanceof Target).toBe(true));
    });
    it('should support a function returning an array of Class Object or a Class Object', () => {
      expect(service.fetch2(source) instanceof Target).toBe(true);
    });
    it('should support an aync function', async function() {
      const res = await service.fetch3(source);
      expect(res instanceof Target).toBe(true);
    });
    it('should support a function returning an array of Class Objects', function() {
      service.fetchMultiple(source).forEach(item => expect(item instanceof Target).toBe(true));
    });
    it('should allow to morph with Morph decorator to Class Object', function() {
      expect(service.withMorphDecorator(source) instanceof Target).toBe(true);
    });
  });
});
