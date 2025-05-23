// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_AUTOBOX_METADATA: Metadata = {
    id: "c48b09409ec96591cf8ab9ce93ca409e6795208a.boutiques",
    name: "3dAutobox",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAutoboxParameters {
    "__STYXTYPE__": "3dAutobox";
    "input": InputPathType;
    "prefix"?: string | null | undefined;
    "alt_input"?: InputPathType | null | undefined;
    "noclust": boolean;
    "extent": boolean;
    "extent_ijk": boolean;
    "extent_ijk_to_file"?: string | null | undefined;
    "extent_ijk_midslice": boolean;
    "extent_ijkord": boolean;
    "extent_ijkord_to_file"?: string | null | undefined;
    "extent_xyz_to_file"?: string | null | undefined;
    "extent_xyz_midslice": boolean;
    "npad"?: number | null | undefined;
    "npad_safety_on": boolean;
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
        "3dAutobox": v_3d_autobox_cargs,
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
 * Output object returned when calling `v_3d_autobox(...)`.
 *
 * @interface
 */
interface V3dAutoboxOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_autobox_params(
    input: InputPathType,
    prefix: string | null = null,
    alt_input: InputPathType | null = null,
    noclust: boolean = false,
    extent: boolean = false,
    extent_ijk: boolean = false,
    extent_ijk_to_file: string | null = null,
    extent_ijk_midslice: boolean = false,
    extent_ijkord: boolean = false,
    extent_ijkord_to_file: string | null = null,
    extent_xyz_to_file: string | null = null,
    extent_xyz_midslice: boolean = false,
    npad: number | null = null,
    npad_safety_on: boolean = false,
): V3dAutoboxParameters {
    /**
     * Build parameters.
    
     * @param input Input dataset
     * @param prefix Crop the input dataset to the size of the box, and write an output dataset with PREFIX for the name. If not used, no new volume is written out.
     * @param alt_input An alternate way to specify the input dataset.
     * @param noclust Don't do any clustering to find the box. Any non-zero voxel will be preserved in the cropped volume.
     * @param extent Write to standard out the spatial extent of the box.
     * @param extent_ijk Write out the 6 auto bbox ijk slice numbers to screen: imin imax jmin jmax kmin kmax.
     * @param extent_ijk_to_file Write out the 6 auto bbox ijk slice numbers to a simple-formatted text file FF: imin imax jmin jmax kmin kmax.
     * @param extent_ijk_midslice Write out the 3 ijk midslices of the autobox to the screen: imid jmid kmid.
     * @param extent_ijkord Write out the 6 auto bbox ijk slice numbers to screen in a particular order and format. Useful for scripting.
     * @param extent_ijkord_to_file Write out the 6 auto bbox ijk slice numbers to a file in a particular order and format. Useful for 3dcalc expressions.
     * @param extent_xyz_to_file Write out the 6 auto bbox xyz coordinates to a simple-formatted text file GG: xmin xmax ymin ymax zmin zmax.
     * @param extent_xyz_midslice Write out the 3 xyz midslices of the autobox to the screen: xmid ymid zmid.
     * @param npad Number of extra voxels to pad on each side of box.
     * @param npad_safety_on Constrain npad-ded extents to be within dataset.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dAutobox" as const,
        "input": input,
        "noclust": noclust,
        "extent": extent,
        "extent_ijk": extent_ijk,
        "extent_ijk_midslice": extent_ijk_midslice,
        "extent_ijkord": extent_ijkord,
        "extent_xyz_midslice": extent_xyz_midslice,
        "npad_safety_on": npad_safety_on,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (alt_input !== null) {
        params["alt_input"] = alt_input;
    }
    if (extent_ijk_to_file !== null) {
        params["extent_ijk_to_file"] = extent_ijk_to_file;
    }
    if (extent_ijkord_to_file !== null) {
        params["extent_ijkord_to_file"] = extent_ijkord_to_file;
    }
    if (extent_xyz_to_file !== null) {
        params["extent_xyz_to_file"] = extent_xyz_to_file;
    }
    if (npad !== null) {
        params["npad"] = npad;
    }
    return params;
}


function v_3d_autobox_cargs(
    params: V3dAutoboxParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dAutobox");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["alt_input"] ?? null) !== null) {
        cargs.push(
            "-input",
            execution.inputFile((params["alt_input"] ?? null))
        );
    }
    if ((params["noclust"] ?? null)) {
        cargs.push("-noclust");
    }
    if ((params["extent"] ?? null)) {
        cargs.push("-extent");
    }
    if ((params["extent_ijk"] ?? null)) {
        cargs.push("-extent_ijk");
    }
    if ((params["extent_ijk_to_file"] ?? null) !== null) {
        cargs.push(
            "-extent_ijk_to_file",
            (params["extent_ijk_to_file"] ?? null)
        );
    }
    if ((params["extent_ijk_midslice"] ?? null)) {
        cargs.push("-extent_ijk_midslice");
    }
    if ((params["extent_ijkord"] ?? null)) {
        cargs.push("-extent_ijkord");
    }
    if ((params["extent_ijkord_to_file"] ?? null) !== null) {
        cargs.push(
            "-extent_ijkord_to_file",
            (params["extent_ijkord_to_file"] ?? null)
        );
    }
    if ((params["extent_xyz_to_file"] ?? null) !== null) {
        cargs.push(
            "-extent_xyz_to_file",
            (params["extent_xyz_to_file"] ?? null)
        );
    }
    if ((params["extent_xyz_midslice"] ?? null)) {
        cargs.push("-extent_xyz_midslice");
    }
    if ((params["npad"] ?? null) !== null) {
        cargs.push(
            "-npad",
            String((params["npad"] ?? null))
        );
    }
    if ((params["npad_safety_on"] ?? null)) {
        cargs.push("-npad_safety_on");
    }
    return cargs;
}


function v_3d_autobox_outputs(
    params: V3dAutoboxParameters,
    execution: Execution,
): V3dAutoboxOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAutoboxOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_autobox_execute(
    params: V3dAutoboxParameters,
    execution: Execution,
): V3dAutoboxOutputs {
    /**
     * Computes size of a box that fits around the volume. Can also be used to crop the volume to that box.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAutoboxOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_autobox_cargs(params, execution)
    const ret = v_3d_autobox_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_autobox(
    input: InputPathType,
    prefix: string | null = null,
    alt_input: InputPathType | null = null,
    noclust: boolean = false,
    extent: boolean = false,
    extent_ijk: boolean = false,
    extent_ijk_to_file: string | null = null,
    extent_ijk_midslice: boolean = false,
    extent_ijkord: boolean = false,
    extent_ijkord_to_file: string | null = null,
    extent_xyz_to_file: string | null = null,
    extent_xyz_midslice: boolean = false,
    npad: number | null = null,
    npad_safety_on: boolean = false,
    runner: Runner | null = null,
): V3dAutoboxOutputs {
    /**
     * Computes size of a box that fits around the volume. Can also be used to crop the volume to that box.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Input dataset
     * @param prefix Crop the input dataset to the size of the box, and write an output dataset with PREFIX for the name. If not used, no new volume is written out.
     * @param alt_input An alternate way to specify the input dataset.
     * @param noclust Don't do any clustering to find the box. Any non-zero voxel will be preserved in the cropped volume.
     * @param extent Write to standard out the spatial extent of the box.
     * @param extent_ijk Write out the 6 auto bbox ijk slice numbers to screen: imin imax jmin jmax kmin kmax.
     * @param extent_ijk_to_file Write out the 6 auto bbox ijk slice numbers to a simple-formatted text file FF: imin imax jmin jmax kmin kmax.
     * @param extent_ijk_midslice Write out the 3 ijk midslices of the autobox to the screen: imid jmid kmid.
     * @param extent_ijkord Write out the 6 auto bbox ijk slice numbers to screen in a particular order and format. Useful for scripting.
     * @param extent_ijkord_to_file Write out the 6 auto bbox ijk slice numbers to a file in a particular order and format. Useful for 3dcalc expressions.
     * @param extent_xyz_to_file Write out the 6 auto bbox xyz coordinates to a simple-formatted text file GG: xmin xmax ymin ymax zmin zmax.
     * @param extent_xyz_midslice Write out the 3 xyz midslices of the autobox to the screen: xmid ymid zmid.
     * @param npad Number of extra voxels to pad on each side of box.
     * @param npad_safety_on Constrain npad-ded extents to be within dataset.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAutoboxOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_AUTOBOX_METADATA);
    const params = v_3d_autobox_params(input, prefix, alt_input, noclust, extent, extent_ijk, extent_ijk_to_file, extent_ijk_midslice, extent_ijkord, extent_ijkord_to_file, extent_xyz_to_file, extent_xyz_midslice, npad, npad_safety_on)
    return v_3d_autobox_execute(params, execution);
}


export {
      V3dAutoboxOutputs,
      V3dAutoboxParameters,
      V_3D_AUTOBOX_METADATA,
      v_3d_autobox,
      v_3d_autobox_params,
};
