// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RBOX_METADATA: Metadata = {
    id: "67924a2ff0036f0fdd2043af4f02345db414c076.boutiques",
    name: "rbox",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface RboxParameters {
    "__STYXTYPE__": "rbox";
    "number_points": string;
    "dimension"?: string | null | undefined;
    "unit_cube": boolean;
    "unit_diamond": boolean;
    "spiral": boolean;
    "regular_polygon": boolean;
    "cospherical_points": boolean;
    "simplex_points": boolean;
    "simplex_plus_points": boolean;
    "add_point"?: Array<string> | null | undefined;
    "lens_distribution"?: string | null | undefined;
    "random_within": boolean;
    "random_disk"?: string | null | undefined;
    "bounding_box"?: number | null | undefined;
    "homogeneous_coordinates": boolean;
    "remove_command_line": boolean;
    "time_seed": boolean;
    "integer_coordinates": boolean;
    "offset"?: number | null | undefined;
    "user_seed"?: number | null | undefined;
    "mesh_lattice"?: Array<string> | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "rbox": rbox_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `rbox(...)`.
 *
 * @interface
 */
interface RboxOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function rbox_params(
    number_points: string,
    dimension: string | null = null,
    unit_cube: boolean = false,
    unit_diamond: boolean = false,
    spiral: boolean = false,
    regular_polygon: boolean = false,
    cospherical_points: boolean = false,
    simplex_points: boolean = false,
    simplex_plus_points: boolean = false,
    add_point: Array<string> | null = null,
    lens_distribution: string | null = null,
    random_within: boolean = false,
    random_disk: string | null = null,
    bounding_box: number | null = null,
    homogeneous_coordinates: boolean = false,
    remove_command_line: boolean = false,
    time_seed: boolean = false,
    integer_coordinates: boolean = false,
    offset: number | null = null,
    user_seed: number | null = null,
    mesh_lattice: Array<string> | null = null,
): RboxParameters {
    /**
     * Build parameters.
    
     * @param number_points Number of random points in cube, lens, spiral, sphere or grid
     * @param dimension Dimension (e.g., D3 for 3-d)
     * @param unit_cube Add a unit cube to the output (optional: 'c G2.0' sets size)
     * @param unit_diamond Add a unit diamond to the output (optional: 'd G2.0' sets size)
     * @param spiral Generate a regular 3-d spiral
     * @param regular_polygon Generate a regular polygon (optional: 'r s Z1 G0.1' makes a cone)
     * @param cospherical_points Generate cospherical points
     * @param simplex_points Generate random points in simplex, may use 'r' or 'Wn'
     * @param simplex_plus_points Same as 'x', plus simplex
     * @param add_point Add point [n,m,r] first, pads with 0
     * @param lens_distribution Lens distribution of radius n. Also 's', 'r', 'G', 'W'.
     * @param random_within Random distribution within 0.1 of the cube's or sphere's surface
     * @param random_disk Random points in a 0.5 disk projected to a sphere, optional gap size (e.g., 'Z0.5 s G0.6')
     * @param bounding_box Bounding box coordinates, default 0.5
     * @param homogeneous_coordinates Output as homogeneous coordinates for cdd
     * @param remove_command_line Remove command line from the first line of output
     * @param time_seed Use time as the random number seed (default is command line)
     * @param integer_coordinates Print integer coordinates, default 'Bn' is 1e+06
     * @param offset Offset coordinates by n
     * @param user_seed Use n as the random number seed
     * @param mesh_lattice Lattice (Mesh) rotated by [n,-m,0], [m,n,0], [0,0,r], ...
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "rbox" as const,
        "number_points": number_points,
        "unit_cube": unit_cube,
        "unit_diamond": unit_diamond,
        "spiral": spiral,
        "regular_polygon": regular_polygon,
        "cospherical_points": cospherical_points,
        "simplex_points": simplex_points,
        "simplex_plus_points": simplex_plus_points,
        "random_within": random_within,
        "homogeneous_coordinates": homogeneous_coordinates,
        "remove_command_line": remove_command_line,
        "time_seed": time_seed,
        "integer_coordinates": integer_coordinates,
    };
    if (dimension !== null) {
        params["dimension"] = dimension;
    }
    if (add_point !== null) {
        params["add_point"] = add_point;
    }
    if (lens_distribution !== null) {
        params["lens_distribution"] = lens_distribution;
    }
    if (random_disk !== null) {
        params["random_disk"] = random_disk;
    }
    if (bounding_box !== null) {
        params["bounding_box"] = bounding_box;
    }
    if (offset !== null) {
        params["offset"] = offset;
    }
    if (user_seed !== null) {
        params["user_seed"] = user_seed;
    }
    if (mesh_lattice !== null) {
        params["mesh_lattice"] = mesh_lattice;
    }
    return params;
}


function rbox_cargs(
    params: RboxParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("rbox");
    cargs.push((params["number_points"] ?? null));
    if ((params["dimension"] ?? null) !== null) {
        cargs.push((params["dimension"] ?? null));
    }
    if ((params["unit_cube"] ?? null)) {
        cargs.push("c");
    }
    if ((params["unit_diamond"] ?? null)) {
        cargs.push("d");
    }
    if ((params["spiral"] ?? null)) {
        cargs.push("l");
    }
    if ((params["regular_polygon"] ?? null)) {
        cargs.push("r");
    }
    if ((params["cospherical_points"] ?? null)) {
        cargs.push("s");
    }
    if ((params["simplex_points"] ?? null)) {
        cargs.push("x");
    }
    if ((params["simplex_plus_points"] ?? null)) {
        cargs.push("y");
    }
    if ((params["add_point"] ?? null) !== null) {
        cargs.push(
            "P",
            ...(params["add_point"] ?? null)
        );
    }
    if ((params["lens_distribution"] ?? null) !== null) {
        cargs.push(
            "L",
            (params["lens_distribution"] ?? null)
        );
    }
    if ((params["random_within"] ?? null)) {
        cargs.push("W");
    }
    if ((params["random_disk"] ?? null) !== null) {
        cargs.push(
            "Z",
            (params["random_disk"] ?? null)
        );
    }
    if ((params["bounding_box"] ?? null) !== null) {
        cargs.push(
            "B",
            String((params["bounding_box"] ?? null))
        );
    }
    if ((params["homogeneous_coordinates"] ?? null)) {
        cargs.push("h");
    }
    if ((params["remove_command_line"] ?? null)) {
        cargs.push("n");
    }
    if ((params["time_seed"] ?? null)) {
        cargs.push("t");
    }
    if ((params["integer_coordinates"] ?? null)) {
        cargs.push("z");
    }
    if ((params["offset"] ?? null) !== null) {
        cargs.push(
            "O",
            String((params["offset"] ?? null))
        );
    }
    if ((params["user_seed"] ?? null) !== null) {
        cargs.push(
            "t",
            String((params["user_seed"] ?? null))
        );
    }
    if ((params["mesh_lattice"] ?? null) !== null) {
        cargs.push(
            "M",
            ...(params["mesh_lattice"] ?? null)
        );
    }
    return cargs;
}


function rbox_outputs(
    params: RboxParameters,
    execution: Execution,
): RboxOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RboxOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function rbox_execute(
    params: RboxParameters,
    execution: Execution,
): RboxOutputs {
    /**
     * Generate various point distributions. Default is random in cube.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RboxOutputs`).
     */
    params = execution.params(params)
    const cargs = rbox_cargs(params, execution)
    const ret = rbox_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function rbox(
    number_points: string,
    dimension: string | null = null,
    unit_cube: boolean = false,
    unit_diamond: boolean = false,
    spiral: boolean = false,
    regular_polygon: boolean = false,
    cospherical_points: boolean = false,
    simplex_points: boolean = false,
    simplex_plus_points: boolean = false,
    add_point: Array<string> | null = null,
    lens_distribution: string | null = null,
    random_within: boolean = false,
    random_disk: string | null = null,
    bounding_box: number | null = null,
    homogeneous_coordinates: boolean = false,
    remove_command_line: boolean = false,
    time_seed: boolean = false,
    integer_coordinates: boolean = false,
    offset: number | null = null,
    user_seed: number | null = null,
    mesh_lattice: Array<string> | null = null,
    runner: Runner | null = null,
): RboxOutputs {
    /**
     * Generate various point distributions. Default is random in cube.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param number_points Number of random points in cube, lens, spiral, sphere or grid
     * @param dimension Dimension (e.g., D3 for 3-d)
     * @param unit_cube Add a unit cube to the output (optional: 'c G2.0' sets size)
     * @param unit_diamond Add a unit diamond to the output (optional: 'd G2.0' sets size)
     * @param spiral Generate a regular 3-d spiral
     * @param regular_polygon Generate a regular polygon (optional: 'r s Z1 G0.1' makes a cone)
     * @param cospherical_points Generate cospherical points
     * @param simplex_points Generate random points in simplex, may use 'r' or 'Wn'
     * @param simplex_plus_points Same as 'x', plus simplex
     * @param add_point Add point [n,m,r] first, pads with 0
     * @param lens_distribution Lens distribution of radius n. Also 's', 'r', 'G', 'W'.
     * @param random_within Random distribution within 0.1 of the cube's or sphere's surface
     * @param random_disk Random points in a 0.5 disk projected to a sphere, optional gap size (e.g., 'Z0.5 s G0.6')
     * @param bounding_box Bounding box coordinates, default 0.5
     * @param homogeneous_coordinates Output as homogeneous coordinates for cdd
     * @param remove_command_line Remove command line from the first line of output
     * @param time_seed Use time as the random number seed (default is command line)
     * @param integer_coordinates Print integer coordinates, default 'Bn' is 1e+06
     * @param offset Offset coordinates by n
     * @param user_seed Use n as the random number seed
     * @param mesh_lattice Lattice (Mesh) rotated by [n,-m,0], [m,n,0], [0,0,r], ...
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RboxOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RBOX_METADATA);
    const params = rbox_params(number_points, dimension, unit_cube, unit_diamond, spiral, regular_polygon, cospherical_points, simplex_points, simplex_plus_points, add_point, lens_distribution, random_within, random_disk, bounding_box, homogeneous_coordinates, remove_command_line, time_seed, integer_coordinates, offset, user_seed, mesh_lattice)
    return rbox_execute(params, execution);
}


export {
      RBOX_METADATA,
      RboxOutputs,
      RboxParameters,
      rbox,
      rbox_params,
};
