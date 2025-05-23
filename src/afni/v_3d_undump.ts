// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_UNDUMP_METADATA: Metadata = {
    id: "a42a3e34bb6d7324060b71b7ded981c6489cdfe0.boutiques",
    name: "3dUndump",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dUndumpParameters {
    "__STYXTYPE__": "3dUndump";
    "input_files": Array<InputPathType>;
    "prefix"?: string | null | undefined;
    "master"?: InputPathType | null | undefined;
    "dimensions"?: Array<number> | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "datatype"?: string | null | undefined;
    "dval"?: number | null | undefined;
    "fval"?: number | null | undefined;
    "ijk": boolean;
    "xyz": boolean;
    "sphere_radius"?: number | null | undefined;
    "cube_mode": boolean;
    "orient"?: string | null | undefined;
    "head_only": boolean;
    "roimask"?: InputPathType | null | undefined;
    "allow_nan": boolean;
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
        "3dUndump": v_3d_undump_cargs,
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
        "3dUndump": v_3d_undump_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_undump(...)`.
 *
 * @interface
 */
interface V3dUndumpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main output dataset
     */
    outfile: OutputPathType | null;
}


function v_3d_undump_params(
    input_files: Array<InputPathType>,
    prefix: string | null = null,
    master: InputPathType | null = null,
    dimensions: Array<number> | null = null,
    mask: InputPathType | null = null,
    datatype: string | null = null,
    dval: number | null = null,
    fval: number | null = null,
    ijk: boolean = false,
    xyz: boolean = false,
    sphere_radius: number | null = null,
    cube_mode: boolean = false,
    orient: string | null = null,
    head_only: boolean = false,
    roimask: InputPathType | null = null,
    allow_nan: boolean = false,
): V3dUndumpParameters {
    /**
     * Build parameters.
    
     * @param input_files Input ASCII file(s), with one voxel specification per line.
     * @param prefix 'ppp' is the prefix for the output dataset [default = undump].
     * @param master 'mmm' is the master dataset, whose geometry will determine the geometry of the output.
     * @param dimensions Sets the dimensions of the output dataset to be I by J by K voxels.
     * @param mask Specifies a mask dataset 'MMM', which will control which voxels are allowed to get values set.
     * @param datatype 'type' determines the voxel data type of the output, which may be byte, short, or float [default = short].
     * @param dval 'vvv' is the default value stored in each input voxel that does not have a value supplied in the input file [default = 1].
     * @param fval 'fff' is the fill value, used for each voxel in the output dataset that is NOT listed in the input file [default = 0].
     * @param ijk Coordinates in the input file are (i,j,k) index triples.
     * @param xyz Coordinates in the input file are (x,y,z) spatial coordinates, in mm.
     * @param sphere_radius Specifies that a sphere of radius 'rrr' will be filled about each input (x,y,z) or (i,j,k) voxel.
     * @param cube_mode Put cubes down instead of spheres. The 'radius' then is half the length of a side.
     * @param orient Specifies the coordinate order used by -xyz. The code must be 3 letters, one each from the pairs {R,L} {A,P} {I,S}.
     * @param head_only Creates only the .HEAD file.
     * @param roimask Specifies which voxels get what numbers by using a dataset 'rrr', instead of coordinates.
     * @param allow_nan Allow NaN (not-a-number) values to be entered.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dUndump" as const,
        "input_files": input_files,
        "ijk": ijk,
        "xyz": xyz,
        "cube_mode": cube_mode,
        "head_only": head_only,
        "allow_nan": allow_nan,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (master !== null) {
        params["master"] = master;
    }
    if (dimensions !== null) {
        params["dimensions"] = dimensions;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (datatype !== null) {
        params["datatype"] = datatype;
    }
    if (dval !== null) {
        params["dval"] = dval;
    }
    if (fval !== null) {
        params["fval"] = fval;
    }
    if (sphere_radius !== null) {
        params["sphere_radius"] = sphere_radius;
    }
    if (orient !== null) {
        params["orient"] = orient;
    }
    if (roimask !== null) {
        params["roimask"] = roimask;
    }
    return params;
}


function v_3d_undump_cargs(
    params: V3dUndumpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dUndump");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["master"] ?? null) !== null) {
        cargs.push(
            "-master",
            execution.inputFile((params["master"] ?? null))
        );
    }
    if ((params["dimensions"] ?? null) !== null) {
        cargs.push(
            "-dimen",
            ...(params["dimensions"] ?? null).map(String)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["datatype"] ?? null) !== null) {
        cargs.push(
            "-datum",
            (params["datatype"] ?? null)
        );
    }
    if ((params["dval"] ?? null) !== null) {
        cargs.push(
            "-dval",
            String((params["dval"] ?? null))
        );
    }
    if ((params["fval"] ?? null) !== null) {
        cargs.push(
            "-fval",
            String((params["fval"] ?? null))
        );
    }
    if ((params["ijk"] ?? null)) {
        cargs.push("-ijk");
    }
    if ((params["xyz"] ?? null)) {
        cargs.push("-xyz");
    }
    if ((params["sphere_radius"] ?? null) !== null) {
        cargs.push(
            "-srad",
            String((params["sphere_radius"] ?? null))
        );
    }
    if ((params["cube_mode"] ?? null)) {
        cargs.push("-cubes");
    }
    if ((params["orient"] ?? null) !== null) {
        cargs.push(
            "-orient",
            (params["orient"] ?? null)
        );
    }
    if ((params["head_only"] ?? null)) {
        cargs.push("-head_only");
    }
    if ((params["roimask"] ?? null) !== null) {
        cargs.push(
            "-ROImask",
            execution.inputFile((params["roimask"] ?? null))
        );
    }
    if ((params["allow_nan"] ?? null)) {
        cargs.push("-allow_NaN");
    }
    return cargs;
}


function v_3d_undump_outputs(
    params: V3dUndumpParameters,
    execution: Execution,
): V3dUndumpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dUndumpOutputs = {
        root: execution.outputFile("."),
        outfile: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function v_3d_undump_execute(
    params: V3dUndumpParameters,
    execution: Execution,
): V3dUndumpOutputs {
    /**
     * Assembles a 3D dataset from an ASCII list of coordinates and optionally values.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dUndumpOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_undump_cargs(params, execution)
    const ret = v_3d_undump_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_undump(
    input_files: Array<InputPathType>,
    prefix: string | null = null,
    master: InputPathType | null = null,
    dimensions: Array<number> | null = null,
    mask: InputPathType | null = null,
    datatype: string | null = null,
    dval: number | null = null,
    fval: number | null = null,
    ijk: boolean = false,
    xyz: boolean = false,
    sphere_radius: number | null = null,
    cube_mode: boolean = false,
    orient: string | null = null,
    head_only: boolean = false,
    roimask: InputPathType | null = null,
    allow_nan: boolean = false,
    runner: Runner | null = null,
): V3dUndumpOutputs {
    /**
     * Assembles a 3D dataset from an ASCII list of coordinates and optionally values.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input ASCII file(s), with one voxel specification per line.
     * @param prefix 'ppp' is the prefix for the output dataset [default = undump].
     * @param master 'mmm' is the master dataset, whose geometry will determine the geometry of the output.
     * @param dimensions Sets the dimensions of the output dataset to be I by J by K voxels.
     * @param mask Specifies a mask dataset 'MMM', which will control which voxels are allowed to get values set.
     * @param datatype 'type' determines the voxel data type of the output, which may be byte, short, or float [default = short].
     * @param dval 'vvv' is the default value stored in each input voxel that does not have a value supplied in the input file [default = 1].
     * @param fval 'fff' is the fill value, used for each voxel in the output dataset that is NOT listed in the input file [default = 0].
     * @param ijk Coordinates in the input file are (i,j,k) index triples.
     * @param xyz Coordinates in the input file are (x,y,z) spatial coordinates, in mm.
     * @param sphere_radius Specifies that a sphere of radius 'rrr' will be filled about each input (x,y,z) or (i,j,k) voxel.
     * @param cube_mode Put cubes down instead of spheres. The 'radius' then is half the length of a side.
     * @param orient Specifies the coordinate order used by -xyz. The code must be 3 letters, one each from the pairs {R,L} {A,P} {I,S}.
     * @param head_only Creates only the .HEAD file.
     * @param roimask Specifies which voxels get what numbers by using a dataset 'rrr', instead of coordinates.
     * @param allow_nan Allow NaN (not-a-number) values to be entered.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dUndumpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_UNDUMP_METADATA);
    const params = v_3d_undump_params(input_files, prefix, master, dimensions, mask, datatype, dval, fval, ijk, xyz, sphere_radius, cube_mode, orient, head_only, roimask, allow_nan)
    return v_3d_undump_execute(params, execution);
}


export {
      V3dUndumpOutputs,
      V3dUndumpParameters,
      V_3D_UNDUMP_METADATA,
      v_3d_undump,
      v_3d_undump_params,
};
